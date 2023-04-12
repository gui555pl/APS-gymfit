import IFabricaRepositorios from "./IFabricaRepositorios";
import IRepositorioTreinos from "../dados/Treinos/IRepositorioTreinos";
import RepositorioTreinos from "../dados/Treinos/RepositorioTreinos/RepositorioTreinos";

class FabricaRepositorios implements IFabricaRepositorios {
  criarRepositorioTreinos(): IRepositorioTreinos {
    return new RepositorioTreinos();
  }
}

export default FabricaRepositorios;
