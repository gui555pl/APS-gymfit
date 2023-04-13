import { singleton } from "tsyringe";
import { v4 as uuidv4 } from "uuid";

import ContasDefault from "./default";
import Conta from "../../../negocio/Conta/Conta";
import ContaAluno from "../../../negocio/Conta/ContaAluno";
import ContaTreinador from "../../../negocio/Conta/ContaTreinador";
import IRepositorioContas from "../IRepositorioContas";

@singleton()
class RepositorioContas implements IRepositorioContas {
  private contas: Conta[];

  constructor() {
    // TODO: Remover dados estaticos!
    this.contas = ContasDefault;
  }

  inserir(conta: ContaAluno | ContaTreinador): Conta {
    conta.setId(this.contas.length + 1);
    this.contas.push(conta);
    return conta;
  }

  atualizar(conta: ContaAluno | ContaTreinador): Conta {
    const contaIndex = this.contas.findIndex(
      t => t.getIdConta() === conta.getIdConta()
    );
    this.contas[contaIndex] = conta;
    return conta;
  }

  consultar(id: number): Conta | undefined {
    const conta = this.contas.find(t => t.getIdConta() === id);
    return conta;
  }
}

export default RepositorioContas;
