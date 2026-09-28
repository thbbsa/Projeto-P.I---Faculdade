export class ContaCorrente {
    numero: number
    cliente: string
    saldo: number

    constructor(numero: number, cliente: string, saldo: number = 0) {
        this.numero = numero;
        this.cliente = cliente;
        this.saldo = saldo;
    }

    depositar(valor: number) {
        console.log("Depositando R$" + valor.toFixed(2));
    }
}