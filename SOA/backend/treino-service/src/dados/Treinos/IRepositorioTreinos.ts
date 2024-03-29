import Treino from "../../negocio/Treino/Treino";

interface IRepositorioTreinos {
  inserir(treino: Treino): Treino;

  consultar(id: number): Treino[] | undefined;

  atualizar(treino: Treino): Treino;

  apagar(treino: Treino): void;
}

export default IRepositorioTreinos;
