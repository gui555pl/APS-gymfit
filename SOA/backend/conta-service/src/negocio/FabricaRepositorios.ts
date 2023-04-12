import IFabricaRepositorios from "./IFabricaRepositorios";
import IRepositorioContas from "../dados/Contas/IRepositorioContas";
import RepositorioContas from "../dados/Contas/RepositorioContas/RepositorioContas";

class FabricaRepositorios implements IFabricaRepositorios {
  criarRepositorioContas(): IRepositorioContas {
    return new RepositorioContas();
  }
}

export default FabricaRepositorios;
