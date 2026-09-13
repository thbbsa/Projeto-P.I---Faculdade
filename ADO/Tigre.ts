class Tigre {
  nome: string;
  peso: number;
  velocidadeMaximaKmH: number;

  constructor(nome: string) {
    this.nome = nome;
    this.peso = 200;
    this.velocidadeMaximaKmH = 60;
  }

  rugir(): void {
    console.log(`${this.nome} está rugindo bem alto! 🐯`);
  }

  cacar(presa: string): void {
    console.log(`${this.nome} está caçando um(a) ${presa}.`);
  }
}

const tigre1 = new Tigre("Rajado");
const tigre2 = new Tigre("Sombra");

console.log(`Animal 1: ${tigre1.nome}`);
console.log(`Animal 2: ${tigre2.nome}`);

tigre1.rugir();
tigre1.cacar("veado");

tigre2.rugir();
tigre2.cacar("javali");
