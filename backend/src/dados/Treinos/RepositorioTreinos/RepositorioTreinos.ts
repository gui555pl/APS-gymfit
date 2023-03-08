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

  inserir(tipo: string, exercicios: string[], idConta: number): Treino {
    const treino = new Treino(tipo, exercicios, idConta);
    this.treinos.push(treino);
    return treino;
  }

  consultar(id: number): Treino | undefined {
    const treino = this.treinos.find(t => t.getIdConta() === id);
    return treino;
  }
}

export default RepositorioTreinos;
