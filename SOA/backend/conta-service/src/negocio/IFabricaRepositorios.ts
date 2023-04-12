import IRepositorioContas from "../dados/Contas/IRepositorioContas";

interface IFabricaRepositorios {
  criarRepositorioContas(): IRepositorioContas;
}

export default IFabricaRepositorios;
