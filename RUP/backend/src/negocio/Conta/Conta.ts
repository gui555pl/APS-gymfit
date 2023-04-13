class Conta {
  private nome;
  private id;
  private email;

  constructor(nome: string, id: number, email: string) {
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

  public getEmail(): string {
    return this.getConta().email;
  }

  public getNome(): string {
    return this.getConta().nome;
  }

  public getIdConta(): number {
    return this.getConta().id;
  }

  public setId(id: number): void {
    this.id = id;
  }
}

export default Conta;
