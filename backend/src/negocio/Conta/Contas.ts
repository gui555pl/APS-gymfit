import { inject, injectable } from "tsyringe";

import Conta from "./Conta";
import IRepositorioContas from "../../dados/Contas/IRepositorioContas";

@injectable()
class Contas {
  private repositorioContas;

  constructor(
    @inject("RepositorioContas") repositorioContas: IRepositorioContas
  ) {
    this.repositorioContas = repositorioContas;
  }

  public inserirConta(
    nome: string,
    tipo: string,
    email: string,
    id: number
  ): Conta {
    const conta = this.repositorioContas.inserir(nome, tipo, email, id);
    return conta;
  }

  public validarConta(idConta: number): boolean {
    return !!this.repositorioContas.consultar(idConta);
  }
}

export default Contas;
