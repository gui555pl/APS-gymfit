import { resolve } from "path";

import { Request, Response } from "express";
import { injectable } from "tsyringe";

import Conta from "../negocio/Conta/Conta";
import Fachada from "../negocio/Fachada";

@injectable()
class TelaEditarConta {
  private fachada;

  constructor(fachada: Fachada) {
    this.fachada = fachada;
  }

  public async listarContasAlunos(req: Request, res: Response) {
    const conta = await this.fachada.listarContasAlunos();

    if (conta) {
      res.json(conta);
    } else {
      throw new Error("Credenciais inválidas");
    }
  }
}

export default TelaEditarConta;
