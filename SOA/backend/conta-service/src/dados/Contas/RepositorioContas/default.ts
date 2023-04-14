import Conta from "../../../negocio/Conta/Conta";
import ContaAluno from "../../../negocio/Conta/ContaAluno";
import ContaTreinador from "../../../negocio/Conta/ContaTreinador";

const ContasDefault: Conta[] = [
  new ContaAluno("Guilherme", 1, "guilherme@email.com"),
  new ContaAluno("Igor", 2, "igor@email.com"),
  new ContaTreinador("Vinícius", 3, "vinicius@email.com"),
  new ContaTreinador("Rogério", 4, "rogerio@email.com")
];

export default ContasDefault;
