import { container, inject, injectable, singleton } from "tsyringe";

import IFabricaRepositorios from "./IFabricaRepositorios";
import ControladorTreinos from "./Treino/ControladorTreinos";
import Treino from "./Treino/Treino";
import IRepositorioTreinos from "../dados/Treinos/IRepositorioTreinos";

@injectable()
@singleton()
class Fachada {
  private controladorTreinos;

  constructor(
    @inject("FabricaRepositorios") fabricaRepositorios: IFabricaRepositorios
  ) {
    container.register<IRepositorioTreinos>("RepositorioTreinos", {
      useValue: fabricaRepositorios.criarRepositorioTreinos()
    });

    this.controladorTreinos = container.resolve(ControladorTreinos);
  }

  public cadastrarTreino(treino: Treino): Treino {
    return this.controladorTreinos.cadastrarTreino(treino);
  }

  public consultarTreino(idConta: number): Treino[] | undefined {
    return this.controladorTreinos.consultarTreino(idConta);
  }

  public getTreino(idConta: number, tipo: string): Treino | undefined {
    return this.controladorTreinos.getTreino(idConta, tipo);
  }

  public editarTreino(treino: Treino): Treino {
    return this.controladorTreinos.editarTreino(treino);
  }

  public apagarTreino(treino: Treino): void {
    this.controladorTreinos.apagarTreino(treino);
  }
}

export default Fachada;
