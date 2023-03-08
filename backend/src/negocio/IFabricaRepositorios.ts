import IRepositorioContas from "../dados/Contas/IRepositorioContas";
import IRepositorioTreinos from "../dados/Treinos/IRepositorioTreinos";

interface IFabricaRepositorios {
  criarRepositorioTreinos(): IRepositorioTreinos;
  criarRepositorioContas(): IRepositorioContas;
}

export default IFabricaRepositorios;
