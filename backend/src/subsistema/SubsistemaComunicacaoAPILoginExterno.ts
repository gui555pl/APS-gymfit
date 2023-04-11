// import { initializeApp, cert } from "firebase-admin/app";
// import { getAuth } from "firebase-admin/auth";
import axios from "axios";

import ISubsistemaComunicacaoAPILoginExterno from "./ISubsistemaComunicacaoAPILoginExterno";
import ContaFirebase from "../negocio/ContaFirebase/ContaFirebase";

// const serviceAccount = require("./config/serviceAccount.json");
// const {
//   initializeApp,
//   applicationDefault,
//   cert
// } = require("firebase-admin/app");
// initializeApp({
//   credential: cert(JSON.stringify(serviceAccount))
// });
// initializeApp({
//   credential: cert(serviceAccount)
// });
class SubsistemaComunicacaoAPILoginExterno
  implements ISubsistemaComunicacaoAPILoginExterno
{
  async consultaExterna(
    email: string,
    password: string,
    nome: string,
    tipo: string
  ): Promise<ContaFirebase | void> {
    try {
      const baseURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FIREBASE_API_KEY}`;
      const response = await axios.post(baseURL, {
        email,
        password,
        returnSecureToken: true
      });
      if (response.status === 200) {
        const { idToken, email, localId } = response.data;
        const conta = new ContaFirebase(idToken, email, localId, nome, tipo);
        return conta;
      } else {
        throw new Error(
          `Erro ao criar conta: ${{
            response: response.data,
            status: response.status
          }}`
        );
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default SubsistemaComunicacaoAPILoginExterno;
