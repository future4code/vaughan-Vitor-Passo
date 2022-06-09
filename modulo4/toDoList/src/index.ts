import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import connection from "./connection";
const app = express();
app.use(express.json());
app.use(cors());

// esse endPoint cria um novo usuário
app.post("/createUser", async (req, res) => {
  try {
    let id = uuidv4();
    let name = req.body.name;
    let nickName = req.body.nickName;
    let email = req.body.email;

    if (!name || !nickName || !email) {
      throw new Error("Favor preecha os campos!");
    } else {
      await connection("TodoListUser").insert({
        id,
        name,
        nickName,
        email
      });
      res.status(201).send({ name, nickName, email });
    }
  } catch (e) {
    switch (e.message) {
      case "Favor preecha os campos!":
        res.status(422).send(e.message);
        break;

      default:
        res.status(500).send(e.message);
        break;
    }
  }
});

// esse endPoint cria uma nova task
app.post("/task", async (req, res): Promise<void> => {
  try {
    let id = uuidv4();
    let title = req.body.title;
    let description = req.body.description;
    let limit_date = req.body.limit_date;
    let creator_user_id = req.body.creator_user_id;

    if (!title && !description && !limit_date && !creator_user_id) {
      throw new Error("Favor preecha os campos!");
    }
    await connection("task").insert({
      id,
      title,
      description,
      limit_date,
      creator_user_id
    });
    res.status(201).send({
      title,
      description,
      limit_date,
      creator_user_id
    });
  } catch (e) {
    switch (e.message) {
      case "Favor preecha os campos!":
        res.status(401).send({ message: e.message });
        break;
      default:
        res.status(500).send({ message: e.sqlMessage || e.message });
        break;
    }
  }
});

// "responsible_user_id": null
app.post('/test', async (req, res): Promise<void> => {
  try {
    let task_id = req.body.task_id;
    let responsible_user_id = req.body.responsible_user_id;
    if (!task_id || !responsible_user_id) {
      throw new Error("Campos vazios, Favor preencha");
    }
    await connection('ResponsibleUserTaskRelation')
    .insert({task_id, responsible_user_id})
    res.status(201).send({task_id, responsible_user_id})
  } catch (e:any) {
    switch (e.message) {
      case "Campos vazios, Favor preencha":
        break;
      default:
        res.status(500).send({ message: e.sqlMessage || e.message })
        break;
    }
  }
})

// esse endPoint edita um usuário
app.put("/editUSer/:id", async (req, res): Promise<void> => {
  try {
    let name = req.body.name;
    let nickName = req.body.nickName;
    let email = req.body.email;

    if (!name && !nickName && !email) {
      throw new Error("Campos vazios, Favor preencha para fazer a editação");
    }
    await connection("TodoListUser")
      .update({
        name,
        nickName,
        email
      })
      .where({ id: req.params.id });
    res.status(201).send({ message: "Usuario editado com sucesso!" });
  } catch (e) {
    switch (e.message) {
      case "Campos vazios, Favor preencha para fazer a editação":
        res.status(422).send({ message: e.message });
        break;
      default:
        res.status(500).send({ message: e.sqlMessage || e.message });
        break;
    }
  }
});

// esse endPoint retorna todos os usuário
app.get("/user/all", async (req, res) => {
  try {
    const result = await connection("TodoListUser");
    res.status(201).send(result);
  } catch (e) {
    res.status(500).send({ message: e.sqlMessage || e.message });
  }
});

// esse endPoint um usuário espécifico, mas caso insira um id que nao seja o do Db ele ainda faz a requisição
app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new Error("Insira um id válido");
    } else if (typeof id !== "string") {
      throw new Error("Insira um tipo de id válido");
    }
    const result = await connection.raw(`
            SELECT * FROM TodoListUser WHERE id = "${id}"
        `);
    res.status(205).send(result[0][0]);
  } catch (e) {
    switch (e.message) {
      case "Insira um id válido":
        res.status(422).send(e.message);
        break;
      case "Insira um id válido":
        res.status(401).send(e.message);
        break;
      default:
        res.status(500).send({ message: e.sqlMessage || e.message });
        break;
    }
  }
});

// esse endPoint um task espécifico, mas nao busca o nome do usuario
app.get("/task/:id", async (req, res): Promise<void> => {
  try {
    const id = req.params.id;
    const result = await connection.raw(`
    SELECT t.*, tlu.name as creatorUserName
    FROM task as t 
    join TodoListUser as tlu
    ON tlu.id = "${id}";
      `);
    /*
    select('*').from('task')
    .join('ToDoListUser', 'task.creator_user_id')
    .where() nao sei como é on aqui
    */
    console.log(result);
    res.status(201).send(result[0][0]);
  } catch (e) {
    switch (e.message) {
      case "":
        res.status(401).send({ message: e.message });
        break;

      default:
        res.status(500).send({ message: e.sqlMessage || e.message });
        break;
    }
  }
});

// esse endPoint retorna task criado por usuário
app.get("/task", async (req, res): Promise<void> => {
  try {
    const id = req.query.id;
    if (!id) {
      throw new Error("Digite uma query válida");
    }
    // const result = await connection("task")
    //   .select("*")
    //   .from("task")
    //   .where({ id: id });
    // console.log(result);
    // res.status(201).send(result); tentando fazer com queryBuild, mas nao consegui

    const result = await connection.raw(`
    SELECT t.*, tlu.name as creatorUserName
    FROM task as t 
    join TodoListUser as tlu
    ON tlu.id = "${id}"
      `);
    console.log(result);
    res.status(201).send(result[0][0]);
  } catch (e) {
    switch (e.message) {
      case "Digite uma query válida":
        res.status(422).send({ message: e.message });
        break;

      default:
        res.status(500).send({ message: e.sqlMessage || e.message });
        break;
    }
  }
});

//esse endPoint retorna usuario pesquisado por query
app.get("/user", async (req, res) => {
  try {
    const id = req.query.id;
    if (!id) {
      throw new Error("Insira um id válido");
    } else if (typeof id !== "string") {
      throw new Error("Insira um tipo de id válido");
    }
    const result = await connection.raw(`
            SELECT id, nickname FROM TodoListUser WHERE id = "${id}"
        `);
    res.status(205).send(result[0][0]);
  } catch (e) {
    switch (e.message) {
      case "Insira um id válido":
        res.status(422).send(e.message);
        break;
      case "Insira um id válido":
        res.status(401).send(e.message);
        break;
      default:
        res.status(500).send({ message: e.sqlMessage || e.message });
        break;
    }
  }
});

app.listen(3003, () => {
  console.log("Back end rodando na porta 3003");
});
