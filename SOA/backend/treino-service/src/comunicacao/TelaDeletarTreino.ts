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

  public async apagarTreino(
    req: Request,
    res: Response
  ): Promise<Treino | void> {
    const tipo = req.body.tipo;
    const idConta = req.body.idConta;

    const treinoToDelete = this.fachada.getTreino(idConta, tipo);

    if (treinoToDelete) {
      this.fachada.apagarTreino(treinoToDelete);
      res.status(200).send();
    } else {
      res.status(500).send();
    }
  }
}

export default TelaCadastrarTreinos;
