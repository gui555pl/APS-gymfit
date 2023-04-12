import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Fachada from "../negocio/Fachada";

@injectable()
class TelaListarTreinos {
  private fachada;

  constructor(fachada: Fachada) {
    this.fachada = fachada;
  }

  public consultarTreino(req: Request, res: Response) {
    const idConta = req.body.idConta;

    const treino = this.fachada.consultarTreino(idConta);
    if (treino) {
      res.json(treino);
    } else {
      throw new Error(
        "Não foi possível encontrar um treino para o aluno de id " + idConta
      );
    }
  }
}

export default TelaListarTreinos;
