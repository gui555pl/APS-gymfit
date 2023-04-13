import { container } from "tsyringe";

import FabricaRepositorios from "./negocio/FabricaRepositorios";
import IFabricaRepositorios from "./negocio/IFabricaRepositorios";

container.register<IFabricaRepositorios>("FabricaRepositorios", {
  useClass: FabricaRepositorios
});
