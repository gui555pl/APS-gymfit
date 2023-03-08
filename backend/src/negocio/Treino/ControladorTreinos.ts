import { injectable } from "tsyringe";

import Treino from "./Treino";
import Treinos from "./Treinos";

@injectable()
class ControladorTreinos {
  private Treinos: Treinos;

  constructor(Treinos: Treinos) {
    this.Treinos = Treinos;
  }

  public cadastrarTreino(
    tipo: string,
    exercicios: string[],
    idConta: number
  ): Treino {
    return this.Treinos.cadastrarTreino(tipo, exercicios, idConta);
  }

  public consultarTreino(idConta: number): Treino | undefined {
    return this.Treinos.consultarTreino(idConta);
  }
}

export default ControladorTreinos;
