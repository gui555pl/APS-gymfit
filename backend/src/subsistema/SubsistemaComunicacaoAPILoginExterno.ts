import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

import ISubsistemaComunicacaoAPILoginExterno from "./ISubsistemaComunicacaoAPILoginExterno";
import Conta from "../negocio/Conta/Conta";

const serviceAccount = require("./config/serviceAccount.json");
// const {
//   initializeApp,
//   applicationDefault,
//   cert
// } = require("firebase-admin/app");
// initializeApp({
//   credential: cert(JSON.stringify(serviceAccount))
// });
initializeApp({
  credential: cert(serviceAccount)
});
class SubsistemaComunicacaoAPILoginExterno
  implements ISubsistemaComunicacaoAPILoginExterno
{
  consultaExterna(
    email: string,
    password: string,
    nome: string,
    tipo: string
  ): Conta | void {
    getAuth()
      .createUser({
        email,
        emailVerified: false,
        password,
        displayName: nome,
        disabled: false
      })
      .then(userRecord => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully created new user:", userRecord.uid);
        return new Conta(
          userRecord.displayName || "",
          tipo,
          parseInt(userRecord.uid),
          userRecord.email || ""
        );
      })
      .catch(error => {
        console.log("Error creating new user:", error);
      });
  }
}

export default SubsistemaComunicacaoAPILoginExterno;
