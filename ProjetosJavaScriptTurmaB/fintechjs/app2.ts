import { ContaCorrente } from "./conta";

const conta1 = new ContaCorrente(1, "Julia", 100.000)
console.log(conta1.saldo)
conta1.depositar(150);
console.log(conta1.saldo)