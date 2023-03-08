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
  async consultaExterna(
    email: string,
    password: string,
    nome: string,
    tipo: string
  ): Promise<Conta | void> {
    const userRecord = await getAuth().createUser({
      email,
      emailVerified: false,
      password,
      displayName: nome,
      disabled: false
    });

    return new Conta(
      userRecord.displayName || "",
      tipo,
      parseInt(userRecord.uid),
      userRecord.email || ""
    );
  }
}

export default SubsistemaComunicacaoAPILoginExterno;
