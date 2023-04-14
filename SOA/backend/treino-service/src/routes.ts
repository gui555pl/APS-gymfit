import { Router } from "express";
import { container } from "tsyringe";

import TelaCadastrarTreinos from "./comunicacao/TelaCadastrarTreinos";
import TelaDeletarTreino from "./comunicacao/TelaDeletarTreino";
import TelaEditarTreinos from "./comunicacao/TelaEditarTreinos";
import TelaListarTreinos from "./comunicacao/TelaListarTreinos";

const telaListarTreinos = container.resolve(TelaListarTreinos);
const telaCadastrarTreinos = container.resolve(TelaCadastrarTreinos);
const telaEditarTreinos = container.resolve(TelaEditarTreinos);
const telaDeletarTreino = container.resolve(TelaDeletarTreino);

const routes = Router();

routes.post("/treino/get", (req, res) =>
  telaListarTreinos.consultarTreino(req, res)
);

routes.post("/treino", (req, res) =>
  telaCadastrarTreinos.cadastrarTreino(req, res)
);

routes.put("/treino", (req, res) => telaEditarTreinos.editarTreino(req, res));

routes.post("/treino/delete", (req, res) =>
  telaDeletarTreino.apagarTreino(req, res)
);

export default routes;
