import axios from "axios";
import { Request, Response } from "express";
import { connection } from "../data/connection";
import { endereco } from "./getAddress";
import transporter from "./transporter";

export const criandoEndereco = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cep, complemento, numero, email } = req.body;
    if (!cep) {
      throw new Error("Campo nao preenchido");
    } else if (cep.length > 8) {
      throw new Error("cep só aceita 8 caracteres");
    }
    const ress = await endereco(cep);
    await connection("userDate").insert({
      cep: cep,
      logradouro: ress.logradouro,
      numero: numero,
      complemento: complemento,
      bairro: ress.bairro,
      cidade: ress.localidade,
      estado: ress.localidade
    });
    
    const sendEmail = await transporter.sendMail({
      from: `${process.env.NODEMAILER_USER}`, // sender address
      to: `${email}`, // list of receivers
      subject: "Endereço Cadastrado Com Sucesso", // Subject line
      text: "Parabéns seu endereço foi criado com sucesso no labefoods", // plain text body
      html: `<p><strong>Olá, parabéns por se inscrever conosco.</strong> Segue seus dados:
      ENDEREÇO: ${ress.localidade}/${ress.logradouro} ${ress.bairro} ${ress.uf}</p>`
    })
    console.log(sendEmail.messageId)
   
    res.status(201).send({sendEmail, message: "Endereço cadastrado com sucesso" });

  } catch (e) {
    switch (e.message) {
      case "Campo nao preenchido":
        res.status(422).send({ message: e.message });
        break;
      case "cep só aceita 8 caracteres":
        res.status(409).send({ message: e.message });
        break;
      default:
        res.status(500).send({ message: e.message });
        break;
    }
  }
};
