import { container, inject, injectable, singleton } from "tsyringe";

import Conta from "./Conta/Conta";
import ControladorContas from "./Conta/ControladorContas";
import IFabricaRepositorios from "./IFabricaRepositorios";
import ControladorLogin from "./Login/ControladorLogin";
import ControladorTreinos from "./Treino/ControladorTreinos";
import Treino from "./Treino/Treino";
import IRepositorioContas from "../dados/Contas/IRepositorioContas";
import IRepositorioTreinos from "../dados/Treinos/IRepositorioTreinos";

@injectable()
@singleton()
class Fachada {
  private controladorLogin;
  private controladorTreinos;
  private controladorContas;

  constructor(
    @inject("FabricaRepositorios") fabricaRepositorios: IFabricaRepositorios
  ) {
    container.register<IRepositorioTreinos>("RepositorioTreinos", {
      useValue: fabricaRepositorios.criarRepositorioTreinos()
    });
    container.register<IRepositorioContas>("RepositorioContas", {
      useValue: fabricaRepositorios.criarRepositorioContas()
    });

    this.controladorLogin = container.resolve(ControladorLogin);
    this.controladorTreinos = container.resolve(ControladorTreinos);
    this.controladorContas = container.resolve(ControladorContas);
  }

  public fazLogin(
    email: string,
    password: string,
    nome: string,
    tipo: string
  ): Conta | void {
    return this.controladorLogin.fazLogin(email, password, nome, tipo);
  }

  public registrarSessao(conta: Conta): string {
    return this.controladorLogin.registrarSessao(conta);
  }

  public async criarConta(
    email: string,
    password: string,
    nome: string,
    tipo: string
  ): Promise<Conta | void> {
    return await this.controladorContas.criarConta(email, password, nome, tipo);
  }

  public cadastrarTreino(
    tipo: string,
    exercicios: string[],
    idConta: number
  ): Treino {
    return this.controladorTreinos.cadastrarTreino(tipo, exercicios, idConta);
  }

  public consultarTreino(idConta: number): Treino | undefined {
    return this.controladorTreinos.consultarTreino(idConta);
  }
}

export default Fachada;
