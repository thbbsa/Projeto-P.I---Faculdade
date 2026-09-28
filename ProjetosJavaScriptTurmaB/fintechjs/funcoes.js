const clientes = ["Ricardo", "Laura"]

function ola(nome) {
    console.log("Boa-Vindo(a) " + nome);
}

for(cliente of clientes){
    ola(cliente)
}


