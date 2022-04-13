// const getId = async (id:string): Promise <void> => {
// new Date().toISOString() criar data e hora
//

// const assigningResponsibility = async (task_id: string, responsible_user_id: string): Promise <any> => {
    
//   let result = await connection('ResponsibleUserTaskRelation')
//   .insert({
//       task_id,
//       responsible_user_id
// })

// console.log(result)
// return result
// }
// }
/*
app.post("/task/responsible", async (req, res): Promise<void> => {
  try {
    let task_id = req.body.task_id;
    let responsible_user_id = req.body.responsible_user_id;
    if (!task_id && !responsible_user_id) {
      throw new Error("Campos vazios, Favor preencha");
    }
    await connection("ResponsibleUserTaskRelation").insert({
      task_id,
      responsible_user_id
    });

    res.status(201).send({ task_id, responsible_user_id });
  } catch (e) {
    switch (e.message) {
      case "value":
        res.status(401).send({ message: e.message });
        break;

      default:
        break;
    }
  }
});
*/ 