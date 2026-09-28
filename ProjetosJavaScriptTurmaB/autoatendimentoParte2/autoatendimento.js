let saldoIncial = 1000;

const saudacao = () => {
    const dataAtual = new Date();
    const horaAtual = dataAtual.getHours();

    if (horaAtual < 12) {
        alert("Bom Dia!")
    } else if (horaAtual < 18) {
        alert("Boa Tarde!")
    } else {
        alert("Boa Noite!")
    }
}

const consultarSaldo = () => {
    alert(`O seu saldo é ${saldoIncial}`);
}

const depositarSaldo = () => {
    let valor = Number(prompt("Digite o valor do deposito: "));

    saldoIncial += valor;

    alert("Saldo depositado com sucesso!")
}

const sacarSaldo = () => {
    let valor = Number(prompt("Digite o valor do saque: "));

    saldoIncial -= valor;
    alert("Saldo sacado com sucesso!")
}




saudacao();


