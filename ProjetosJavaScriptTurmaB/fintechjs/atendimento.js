// const pacientes = ["Luiz", "Ana", "Roberta"];

// console.log(pacientes);

// if (pacientes.length > 0) {
//     const atendimento = pacientes.shift();

//     // fila reexibida
//     console.log(`Fila reexibida: ${JSON.stringify(pacientes)}`);

//     // cliente atendido
//     console.log(`Cliente atendido: ${atendimento}`);

//     // proximo cliente
//     console.log(`Proximo cliente: ${pacientes[0]}\n`);   
// } else {
//     console.log("Não há ninguem na fila.")
// }



// const clientes = ["Luiz", "Ana", "Roberta"];


// while (clientes.length > 0 ) {
//     console.log(`Atendendo o cliente: ${clientes[0]}`)
//     clientes.shift();
//     exibirFilaAtendimento()

// }

// function exibirFilaAtendimento() {
//     if (clientes.length > 0) {
//         console.log(`Fila reexibida: ${JSON.stringify(pacientes)}`);
//     } else  {
//         console.log("Não há ninguem na fila.")
//     }
// }


function adicionarCliente() {
    let nome = prompt("Digite o nome do cliente: ");

    if (nome) {
        fila.push(nome);
    }
}

function atenderCliente() {
    if (fila.length > 0) {
        let nome = fila.shift();
        alert(`cliente ${nome} atendido!`)
        exibirFilaDeAtendimento();
        atenderProxCliente();
    } else {
        alert("Não há clientes na fila.");
    }
}

function exibirFilaDeAtendimento() {
    if (fila.length > 0) {
        alert(`Fila de Atendimento: ${fila}`)
    } else {
        alert("Fila vazia.")
    }
}

function atenderProxCliente() {
    if (fila.length > 0) {
        const op = confirm("Deseja atender outro cliente?");

        if (op) {
            atenderCliente();
        } else {
            alert("Atendimento encerrado.");
        }
    }

}
