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

  public async editarTreino(
    req: Request,
    res: Response
  ): Promise<Treino | void> {
    const tipo = req.body.tipo;
    const exercicios = req.body.exercicios;
    const idConta = req.body.idConta;

    const treinoToEdit = new Treino(tipo, exercicios, idConta);

    const treino = this.fachada.editarTreino(treinoToEdit);

    res.status(200).send(treino);
    return treino;
  }
}

export default TelaCadastrarTreinos;
