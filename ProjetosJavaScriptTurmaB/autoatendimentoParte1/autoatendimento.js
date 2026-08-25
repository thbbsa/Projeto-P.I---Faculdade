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

saudacao();