export class ContaCorrente {
    constructor(numero, cliente, saldo = 0) {
        this.numero = numero;
        this.cliente = cliente;
        this.saldo = saldo;
    }
    depositar(valor) {
        console.log("Depositando R$" + valor.toFixed(2));
    }
}
