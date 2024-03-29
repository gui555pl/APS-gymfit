import { injectable } from "tsyringe";

import Treino from "./Treino";
import Treinos from "./Treinos";

@injectable()
class ControladorTreinos {
  private Treinos: Treinos;

  constructor(Treinos: Treinos) {
    this.Treinos = Treinos;
  }

  public cadastrarTreino(treino: Treino): Treino {
    return this.Treinos.cadastrarTreino(treino);
  }

  public consultarTreino(idConta: number): Treino[] | undefined {
    return this.Treinos.consultarTreino(idConta);
  }
}

export default ControladorTreinos;
