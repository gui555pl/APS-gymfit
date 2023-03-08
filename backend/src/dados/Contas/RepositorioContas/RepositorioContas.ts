import { singleton } from "tsyringe";
import { v4 as uuidv4 } from "uuid";

import ContasDefault from "./default";
import Conta from "../../../negocio/Conta/Conta";
import IRepositorioContas from "../IRepositorioContas";

@singleton()
class RepositorioContas implements IRepositorioContas {
  private contas: Conta[];

  constructor() {
    // TODO: Remover dados estaticos!
    this.contas = ContasDefault;
  }

  inserir(nome: string, tipo: string, email: string, id: number): Conta {
    const conta = new Conta(nome, tipo, id, email);
    this.contas.push(conta);
    return conta;
  }

  consultar(id: number): Conta | undefined {
    const conta = this.contas.find(t => t.getIdConta() === id);
    return conta;
  }
}

export default RepositorioContas;
