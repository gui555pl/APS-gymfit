import { Router } from "express";
import { container } from "tsyringe";

import TelaCadastrarTreinos from "./comunicacao/TelaCadastrarTreinos";
import TelaEditarTreinos from "./comunicacao/TelaEditarTreinos";
import TelaListarTreinos from "./comunicacao/TelaListarTreinos";

const telaListarTreinos = container.resolve(TelaListarTreinos);
const telaCadastrarTreinos = container.resolve(TelaCadastrarTreinos);
const telaEditarTreinos = container.resolve(TelaEditarTreinos);

const routes = Router();

routes.get("/treino", (req, res) =>
  telaListarTreinos.consultarTreino(req, res)
);

routes.post("/treino", (req, res) =>
  telaCadastrarTreinos.cadastrarTreino(req, res)
);

routes.put("/treino", (req, res) => telaEditarTreinos.editarTreino(req, res));

export default routes;
