import { resolve } from "path";

import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Fachada from "../negocio/Fachada";

@injectable()
class TelaCriarConta {
  private fachada;

  constructor(fachada: Fachada) {
    this.fachada = fachada;
  }

  public async criarConta(req: Request, res: Response) {
    const { email, password, nome, tipo } = req.body;
    const conta = await this.fachada.criarConta(email, password, nome, tipo);

    if (conta) {
      res.json(conta);
    } else {
      throw new Error("Credenciais inválidas");
    }
  }

  public async validarConta(req: Request, res: Response) {
    const { idConta } = req.body;
    const conta = await this.fachada.validarConta(idConta);

    if (conta) {
      res.json({ result: true });
    } else {
      res.json({ result: false });
    }
  }
}

export default TelaCriarConta;
