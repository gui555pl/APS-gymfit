import { Router } from "express";
import { container } from "tsyringe";

import TelaCadastrarTreinos from "./comunicacao/TelaCadastrarTreinos";
import TelaListarTreinos from "./comunicacao/TelaListarTreinos";

const telaListarTreinos = container.resolve(TelaListarTreinos);
const telaCadastrarTreinos = container.resolve(TelaCadastrarTreinos);

const routes = Router();

routes.get("/treino", (req, res) =>
  telaListarTreinos.consultarTreino(req, res)
);

routes.post("/treino", (req, res) =>
  telaCadastrarTreinos.cadastrarTreino(req, res)
);

export default routes;
