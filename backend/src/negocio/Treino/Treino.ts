class Treino {
  private tipo;
  private exercicios;
  private idConta;

  constructor(tipo: string, exercicios: string[], idConta: number) {
    this.tipo = tipo;
    this.exercicios = exercicios;
    this.idConta = idConta;
  }

  public getTreino(): Treino {
    return this;
  }

  public getTipo(): string {
    return this.getTreino().tipo;
  }

  public getExercicios(): string[] {
    return this.getTreino().exercicios;
  }

  public getIdConta(): number {
    return this.getTreino().idConta;
  }
}

export default Treino;
