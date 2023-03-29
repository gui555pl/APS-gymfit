import Conta from "./model/Conta";
import { Request, Response } from "express";

const contas = Array<Conta>();

export const criarConta = async (req: Request, res: Response) => {
  const { nome, tipo, email } = req.body;
  const id = contas.length + 1;
  const conta = new Conta(nome, tipo, id, email);
  contas.push(conta);
  res.json(conta);
}

export const validarConta = async (req: Request, res: Response) => {
  const { idConta } = req.body;
  const conta = contas.find(conta => conta.getId() === idConta);
  const result = conta ? true : false;
  res.json({ result });
}