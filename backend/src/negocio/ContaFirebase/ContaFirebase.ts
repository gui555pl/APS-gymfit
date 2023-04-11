class ContaFirebase {
  private idToken;
  private email;
  private localId;
  private nome;
  private tipo;

  constructor(
    idToken: string,
    email: string,
    localId: string,
    nome: string,
    tipo: string
  ) {
    this.idToken = idToken;
    this.email = email;
    this.localId = localId;
    this.nome = nome;
    this.tipo = tipo;
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

  public getTipo(): string {
    return this.getContaFirebase().tipo;
  }
}

export default ContaFirebase;
