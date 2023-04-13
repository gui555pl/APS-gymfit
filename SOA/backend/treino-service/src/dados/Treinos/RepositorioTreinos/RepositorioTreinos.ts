import { singleton } from "tsyringe";
import { v4 as uuidv4 } from "uuid";

import TreinosDefault from "./default";
import Treino from "../../../negocio/Treino/Treino";
import IRepositorioTreinos from "../IRepositorioTreinos";

@singleton()
class RepositorioTreinos implements IRepositorioTreinos {
  private treinos: Treino[];

  constructor() {
    // TODO: Remover dados estaticos!
    this.treinos = TreinosDefault;
  }

  inserir(treino: Treino): Treino {
    this.treinos.push(treino);
    return treino;
  }

  consultar(id: number): Treino[] | undefined {
    const treino = this.treinos.filter(t => t.getIdConta() === id);
    return treino;
  }

  atualizar(treino: Treino): Treino {
    const treinoIndex = this.treinos.findIndex(
      t =>
        t.getIdConta() === treino.getIdConta() &&
        t.getTipo() === treino.getTipo()
    );
    this.treinos[treinoIndex] = treino;
    return treino;
  }

  apagar(treino: Treino): void {
    const treinoIndex = this.treinos.findIndex(
      t =>
        t.getIdConta() === treino.getIdConta() &&
        t.getTipo() === treino.getTipo()
    );
    this.treinos.splice(treinoIndex, 1);
  }
}

export default RepositorioTreinos;
