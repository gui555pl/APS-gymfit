import { inject, injectable } from "tsyringe";

import Conta from "./Conta";
import ContaAluno from "./ContaAluno";
import ContaTreinador from "./ContaTreinador";
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
    conta: ContaAluno | ContaTreinador
  ): ContaAluno | ContaTreinador {
    return this.repositorioContas.inserir(conta);
  }

  public validarConta(idConta: number): boolean {
    return !!this.repositorioContas.consultar(idConta);
  }

  public editarConta(conta: ContaAluno | ContaTreinador): Conta {
    return this.repositorioContas.atualizar(conta);
  }

  public listarConta(idConta: number): Conta | undefined {
    return this.repositorioContas.consultar(idConta);
  }
}

export default Contas;
