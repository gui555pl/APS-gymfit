import Treino from "../../negocio/Treino/Treino";

interface IRepositorioTreinos {
  inserir(treino: Treino): Treino;

  consultar(id: number): Treino[] | undefined;
}

export default IRepositorioTreinos;
