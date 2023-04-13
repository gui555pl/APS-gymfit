import { container, inject, injectable, singleton } from "tsyringe";

import Conta from "./Conta/Conta";
import ControladorContas from "./Conta/ControladorContas";
import IFabricaRepositorios from "./IFabricaRepositorios";
import IRepositorioContas from "../dados/Contas/IRepositorioContas";

@injectable()
@singleton()
class Fachada {
  private controladorContas;

  constructor(
    @inject("FabricaRepositorios") fabricaRepositorios: IFabricaRepositorios
  ) {
    container.register<IRepositorioContas>("RepositorioContas", {
      useValue: fabricaRepositorios.criarRepositorioContas()
    });

    this.controladorContas = container.resolve(ControladorContas);
  }

  public async criarConta(
    email: string,
    password: string,
    nome: string,
    tipo: string
  ): Promise<Conta | void> {
    return await this.controladorContas.criarConta(email, password, nome, tipo);
  }

  public validarConta(idConta: number): boolean {
    return this.controladorContas.validarConta(idConta);
  }

  public listarConta(idConta: number): Conta | undefined {
    return this.controladorContas.listarConta(idConta);
  }

  public editarConta(conta: Conta) {
    return this.controladorContas.editarConta(conta);
  }
}

export default Fachada;
