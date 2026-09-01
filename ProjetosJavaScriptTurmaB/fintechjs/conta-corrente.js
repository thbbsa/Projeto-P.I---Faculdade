export class ContaCorrente {
    //Atributos
    numero
    cliente
    saldo

    constructor(numero, cliente, saldo = 0) {
        this.numero = numero;
        this.cliente = cliente;
        this.saldo = saldo;
    } // fim do construtor

    consultarSaldo() {
        return `Saldo: ${this.saldo.toFixed(2)}`
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        this.saldo -= valor;
    } 

    pagar(...args) {
        // apenas 1 parâmetro
        if (args.length === 1) {
            this.saldo -= args[0];
        } else if (args.length === 2) {
            this.saldo -= args[0]
            console.log("Pagando " + args[1])
        } else {
            console.log("Parâmetros inválido")
        }
    }

} // fim da classe