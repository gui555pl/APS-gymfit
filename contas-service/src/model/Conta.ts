class Conta {
  private nome;
  private id;
  private tipo;
  private email;

  constructor(nome: string, tipo: string, id: number, email: string) {
    this.tipo = tipo;
    this.nome = nome;
    this.id = id;
    this.email = email;
  }

  public getConta(): Conta {
    return this;
  }

  public getId(): number {
    return this.getConta().id;
  }

  public getTipo(): string {
    return this.getConta().tipo;
  }

  public getEmail(): string {
    return this.getConta().email;
  }

  public getNome(): string {
    return this.getConta().nome;
  }

  public getIdConta(): number {
    return this.getConta().id;
  }
}

export default Conta;
