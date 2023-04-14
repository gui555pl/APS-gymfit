import Conta from "../../negocio/Conta/Conta";
import ContaAluno from "../../negocio/Conta/ContaAluno";
import ContaTreinador from "../../negocio/Conta/ContaTreinador";

interface IRepositorioContas {
  inserir(conta: ContaAluno | ContaTreinador): ContaAluno | ContaTreinador;

  consultar(id: number): Conta | undefined;

  atualizar(conta: ContaAluno | ContaTreinador): ContaAluno | ContaTreinador;

  listarAlunos(): ContaAluno[];
}

export default IRepositorioContas;
