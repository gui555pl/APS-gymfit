import { inject, injectable } from "tsyringe";

import Treino from "./Treino";
import IRepositorioTreinos from "../../dados/Treinos/IRepositorioTreinos";

@injectable()
class Treinos {
  private repositorioTreinos;

  constructor(
    @inject("RepositorioTreinos") repositorioTreinos: IRepositorioTreinos
  ) {
    this.repositorioTreinos = repositorioTreinos;
  }

  public cadastrarTreino(treino: Treino): Treino {
    return this.repositorioTreinos.inserir(treino);
  }

  public consultarTreino(idConta: number): Treino[] | undefined {
    return this.repositorioTreinos.consultar(idConta);
  }

  public editarTreino(treino: Treino): Treino {
    return this.repositorioTreinos.atualizar(treino);
  }

  public getTreino(idConta: number, tipo: string): Treino | undefined {
    const treino = this.repositorioTreinos.consultar(idConta);
    if (treino) {
      return treino.find(
        t => t.getTipo() === tipo && t.getIdConta() === idConta
      );
    }
    return undefined;
  }

  public apagarTreino(treino: Treino): void {
    this.repositorioTreinos.apagar(treino);
  }
}

export default Treinos;
