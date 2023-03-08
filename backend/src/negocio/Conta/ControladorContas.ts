import { injectable } from "tsyringe";

import Conta from "./Conta";
import Contas from "./Contas";
import SubsistemaComunicacaoAPILoginExterno from "../../subsistema/SubsistemaComunicacaoAPILoginExterno";

@injectable()
class ControladorContas {
  private Contas: Contas;

  constructor(Contas: Contas) {
    this.Contas = Contas;
  }

  public criarConta(
    email: string,
    password: string,
    nome: string,
    tipo: string
  ): Conta | void {
    const subsistema = new SubsistemaComunicacaoAPILoginExterno();
    const conta = subsistema.consultaExterna(email, password, nome, tipo);
    if (conta) {
      this.Contas.inserirConta(
        conta.getNome(),
        conta.getTipo(),
        conta.getEmail(),
        conta.getId()
      );
      return conta;
    }
  }

  public validarConta(idConta: number): boolean {
    return this.Contas.validarConta(idConta);
  }
}

export default ControladorContas;
