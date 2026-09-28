import { ContaCorrente } from './conta-corrente.js'
// Criando o objeto conta
const conta1 = new ContaCorrente(1, "Luiz", 100);
console.log("Luiz: "+conta1.consultarSaldo());

conta1.depositar(50);
console.log("Luiz: "+conta1.consultarSaldo());

const conta2 = new ContaCorrente(2, "Ana", 500)
console.log("Ana: "+ conta2.consultarSaldo());

const conta3 = new ContaCorrente(3, "Enzo", 500)
conta3.sacar(50);
console.log("Enzo: "+ conta3.consultarSaldo());

conta3.pagar(40, "Película De Celular")

console.log("Enzo: "+ conta3.consultarSaldo());