import Conta from "../../negocio/Conta/Conta";

interface IRepositorioContas {
  inserir(nome: string, tipo: string, email: string, id: number): Conta;

  consultar(id: number): Conta | undefined;
}

export default IRepositorioContas;
