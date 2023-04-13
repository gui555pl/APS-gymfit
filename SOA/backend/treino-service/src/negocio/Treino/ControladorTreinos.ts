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

  public editarTreino(treino: Treino): Treino {
    return this.Treinos.editarTreino(treino);
  }

  public getTreino(idConta: number, tipo: string): Treino | undefined {
    return this.Treinos.getTreino(idConta, tipo);
  }

  public apagarTreino(treino: Treino): void {
    this.Treinos.apagarTreino(treino);
  }
}

export default ControladorTreinos;
