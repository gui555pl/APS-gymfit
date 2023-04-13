import { Router } from "express";
import { container } from "tsyringe";

import TelaCadastrarTreinos from "./comunicacao/TelaCadastrarTreinos";
import TelaCriarConta from "./comunicacao/TelaCriarConta";
import TelaListarTreinos from "./comunicacao/TelaListarTreinos";

const telaCriarConta = container.resolve(TelaCriarConta);
const telaListarTreinos = container.resolve(TelaListarTreinos);
const telaCadastrarTreinos = container.resolve(TelaCadastrarTreinos);

const routes = Router();

routes.post("/create/conta", (req, res) => telaCriarConta.criarConta(req, res));

routes.get("/treino", (req, res) =>
  telaListarTreinos.consultarTreino(req, res)
);

routes.post("/treino", (req, res) =>
  telaCadastrarTreinos.cadastrarTreino(req, res)
);

export default routes;
