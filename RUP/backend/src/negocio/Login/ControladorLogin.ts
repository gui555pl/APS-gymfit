import jwt from "jsonwebtoken";
import { injectable } from "tsyringe";

import SubsistemaComunicacaoAPILoginExterno from "../../subsistema/SubsistemaComunicacaoAPILoginExterno";
import Conta from "../Conta/Conta";

@injectable()
class ControladorLogin {
  public fazLogin(
    email: string,
    password: string,
    nome: string,
    tipo: string
  ): Conta | void {
    const subsistema = new SubsistemaComunicacaoAPILoginExterno();
    return subsistema.consultaExterna(email, password, nome, tipo);
  }

  public registrarSessao(conta: Conta): string {
    return jwt.sign({ id: `${conta.getId()}` }, "secret", {
      expiresIn: 60 * 60 * 24 * 30
    });
  }
}

export default ControladorLogin;
