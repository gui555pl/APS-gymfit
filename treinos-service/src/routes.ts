import { Router } from "express";

import { listarTreino, cadastrarTreino } from "./controller";

const routes = Router();



routes.get("/treino", (req, res) => listarTreino(req, res));

routes.post("/treino", (req, res) => cadastrarTreino(req, res));

export default routes;
