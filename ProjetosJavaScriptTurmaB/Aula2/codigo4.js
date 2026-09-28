let nota = 10;
let resultado = ""

if (nota < 6) {
    resultado += "Insuficiente"
} else if (nota < 7) {
    resultado += "Regular"
} else if (nota < 9) {
    resultado += "Bom"
} else {
    resultado += "Excelente"
}

console.log(`nota: ${nota} e resultado: ${resultado}`)