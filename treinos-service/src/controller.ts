import Treino from "./model/Treino";
import { Request, Response } from "express";
import axios from "axios";

const treinos = Array<Treino>();

export async function listarTreino (req: Request, res: Response): Promise<void> {
  const { idConta } = req.body;
  const treinosPorIdConta = treinos.filter(treino => treino.getIdConta() === idConta);
  res.json(treinosPorIdConta);
}

export async function cadastrarTreino (req: Request, res: Response): Promise<void> {
  const { tipo, idConta, exercicios } = req.body;
  const { data } = await axios.post("http://contasweb:3334/conta/validar", { idConta });
  const { result: contaValida } = data
  if (!contaValida) {
    res.status(400).json({ message: "Conta inválida" });
    return;
  }
  const treino = new Treino(tipo, exercicios, idConta);
  treinos.push(treino);
  res.json(treino);
}