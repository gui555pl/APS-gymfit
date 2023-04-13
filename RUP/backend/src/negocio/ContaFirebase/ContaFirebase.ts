class ContaFirebase {
  private idToken;
  private email;
  private localId;
  private nome;

  constructor(idToken: string, email: string, localId: string, nome: string) {
    this.idToken = idToken;
    this.email = email;
    this.localId = localId;
    this.nome = nome;
  }

  public getContaFirebase(): ContaFirebase {
    return this;
  }

  public getIdToken(): string {
    return this.getContaFirebase().idToken;
  }

  public getEmail(): string {
    return this.getContaFirebase().email;
  }

  public getLocalId(): string {
    return this.getContaFirebase().localId;
  }

  public getNome(): string {
    return this.getContaFirebase().nome;
  }
}

export default ContaFirebase;
