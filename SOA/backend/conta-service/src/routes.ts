import { Router } from "express";
import { container } from "tsyringe";

import TelaCriarConta from "./comunicacao/TelaCriarConta";
import TelaEditarConta from "./comunicacao/TelaEditarConta";
import TelaListarContas from "./comunicacao/TelaListarContas";

const telaCriarConta = container.resolve(TelaCriarConta);
const telaEditarConta = container.resolve(TelaEditarConta);
const telaListarContas = container.resolve(TelaListarContas);

const routes = Router();

routes.post("/create/conta", (req, res) => telaCriarConta.criarConta(req, res));
routes.post("/conta/validar", (req, res) =>
  telaCriarConta.validarConta(req, res)
);
routes.put("/conta/editar", (req, res) =>
  telaEditarConta.editarConta(req, res)
);

routes.get("/conta/listar", (req, res) =>
  telaListarContas.listarContasAlunos(req, res)
);

export default routes;
