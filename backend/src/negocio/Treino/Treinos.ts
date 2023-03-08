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

  public cadastrarTreino(
    tipo: string,
    exercicios: string[],
    idConta: number
  ): Treino {
    const treino = this.repositorioTreinos.inserir(tipo, exercicios, idConta);
    return treino;
  }

  public consultarTreino(idConta: number): Treino | undefined {
    return this.repositorioTreinos.consultar(idConta);
  }
}

export default Treinos;
