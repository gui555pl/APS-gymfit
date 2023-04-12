import axios from "axios";
import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Fachada from "../negocio/Fachada";
import Treino from "../negocio/Treino/Treino";

@injectable()
class TelaCadastrarTreinos {
  private fachada;

  constructor(fachada: Fachada) {
    this.fachada = fachada;
  }

  public async cadastrarTreino(
    req: Request,
    res: Response
  ): Promise<Treino | void> {
    const tipo = req.body.tipo;
    const exercicios = req.body.exercicios;
    const idConta = req.body.idConta;

    const response = await axios.post("http://localhost:3334/conta/validar", {
      idConta
    });

    if (response.status === 200) {
      const { data } = response;
      const { result: contaValida } = data;
      if (!contaValida) {
        res.status(400).send("Conta inválida");
        return;
      }
    } else {
      res.status(response.status).send(response.data);
    }

    const treinoToCreate = new Treino(tipo, exercicios, idConta);

    const treino = this.fachada.cadastrarTreino(treinoToCreate);

    res.status(200).send(treino);
    return treino;
  }
}

export default TelaCadastrarTreinos;
