import ContaFirebase from "../negocio/ContaFirebase/ContaFirebase";

interface ISubsistemaComunicacaoAPILoginExterno {
  consultaExterna(
    email: string,
    password: string,
    nome: string
  ): Promise<ContaFirebase | void>;
}

export default ISubsistemaComunicacaoAPILoginExterno;
