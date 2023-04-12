import { Router } from "express";
import { container } from "tsyringe";

import TelaCriarConta from "./comunicacao/TelaCriarConta";

const telaCriarConta = container.resolve(TelaCriarConta);

const routes = Router();

routes.post("/create/conta", (req, res) => telaCriarConta.criarConta(req, res));
routes.post("/conta/validar", (req, res) =>
  telaCriarConta.validarConta(req, res)
);

export default routes;
