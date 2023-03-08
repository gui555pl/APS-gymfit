import Treino from "../../negocio/Treino/Treino";

interface IRepositorioTreinos {
  inserir(tipo: string, exercicios: string[], idConta: number): Treino;

  consultar(id: number): Treino | undefined;
}

export default IRepositorioTreinos;
