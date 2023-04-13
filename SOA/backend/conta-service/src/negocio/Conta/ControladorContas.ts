import { injectable } from "tsyringe";

import Conta from "./Conta";
import ContaAluno from "./ContaAluno";
import Contas from "./Contas";
import ContaTreinador from "./ContaTreinador";
import SubsistemaComunicacaoAPILoginExterno from "../../subsistema/SubsistemaComunicacaoAPILoginExterno";
import ContaFirebase from "../ContaFirebase/ContaFirebase";

@injectable()
class ControladorContas {
  private Contas: Contas;

  constructor(Contas: Contas) {
    this.Contas = Contas;
  }

  public async criarConta(
    email: string,
    password: string,
    nome: string,
    tipo: string
  ): Promise<Conta | void> {
    const subsistema = new SubsistemaComunicacaoAPILoginExterno();
    const contaFirebase = await subsistema.consultaExterna(
      email,
      password,
      nome
    );
    if (contaFirebase) {
      const conta = this.criarContaTipada(contaFirebase, tipo);
      this.Contas.inserirConta(conta);
      return conta;
    }
  }

  public listarConta(idConta: number) {
    return this.Contas.listarConta(idConta);
  }

  public editarConta(conta: Conta) {
    return this.Contas.editarConta(conta);
  }

  public validarConta(idConta: number): boolean {
    return this.Contas.validarConta(idConta);
  }

  private criarContaTipada(
    contaFirebase: ContaFirebase,
    tipo: string
  ): ContaAluno | ContaTreinador {
    if (tipo === "aluno") {
      return new ContaAluno(
        contaFirebase.getNome(),
        0,
        contaFirebase.getEmail()
      );
    }
    return new ContaTreinador(
      contaFirebase.getNome(),
      0,
      contaFirebase.getEmail()
    );
  }
}

export default ControladorContas;
