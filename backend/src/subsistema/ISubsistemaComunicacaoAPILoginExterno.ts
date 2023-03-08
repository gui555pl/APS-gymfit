import Conta from "../negocio/Conta/Conta";

interface ISubsistemaComunicacaoAPILoginExterno {
  consultaExterna(
    email: string,
    password: string,
    nome: string,
    tipo: string
  ): Conta | void;
}

export default ISubsistemaComunicacaoAPILoginExterno;
