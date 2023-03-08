import IFabricaRepositorios from "./IFabricaRepositorios";
import IRepositorioContas from "../dados/Contas/IRepositorioContas";
import RepositorioContas from "../dados/Contas/RepositorioContas/RepositorioContas";
import IRepositorioTreinos from "../dados/Treinos/IRepositorioTreinos";
import RepositorioTreinos from "../dados/Treinos/RepositorioTreinos/RepositorioTreinos";

class FabricaRepositorios implements IFabricaRepositorios {
  criarRepositorioTreinos(): IRepositorioTreinos {
    return new RepositorioTreinos();
  }

  criarRepositorioContas(): IRepositorioContas {
    return new RepositorioContas();
  }
}

export default FabricaRepositorios;
