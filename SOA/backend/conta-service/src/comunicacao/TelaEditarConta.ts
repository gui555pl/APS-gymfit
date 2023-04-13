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

  public async editarConta(req: Request, res: Response) {
    const { nome, idConta } = req.body;
    const oldConta = await this.fachada.listarConta(idConta);
    const newConta = new Conta(nome, idConta, oldConta.email);
    const conta = await this.fachada.editarConta(newConta);

    if (conta) {
      res.json(conta);
    } else {
      throw new Error("Credenciais inválidas");
    }
  }
}

export default TelaEditarConta;
