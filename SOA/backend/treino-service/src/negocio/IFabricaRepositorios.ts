
import IRepositorioTreinos from "../dados/Treinos/IRepositorioTreinos";

interface IFabricaRepositorios {
  criarRepositorioTreinos(): IRepositorioTreinos;
}

export default IFabricaRepositorios;
