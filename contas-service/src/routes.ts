import { Router } from "express";

import { validarConta, criarConta } from "./controller";


const routes = Router();


import opossum from 'opossum'

const options = {
  timeout: 3000, // If our function takes longer than 3 seconds, trigger a failure
  errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
  resetTimeout: 30000 // After 30 seconds, try again.
};

const circuitBreaker = new opossum(validarConta, options);

routes.post("/conta/validar", (req, res) => circuitBreaker.fire(req, res));

routes.post("/conta", (req, res) => criarConta(req, res));

export default routes;
