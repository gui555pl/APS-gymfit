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

  public cadastrarTreino(req: Request, res: Response): Treino {
    const tipo = req.body.tipo;
    const exercicios = req.body.exercicios;
    const idConta = req.body.idConta;

    const treinoToCreate = new Treino(tipo, exercicios, idConta);

    const treino = this.fachada.cadastrarTreino(treinoToCreate);

    res.status(200).send(treino);
    return treino;
  }
}

export default TelaCadastrarTreinos;
