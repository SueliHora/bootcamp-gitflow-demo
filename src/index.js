function dividir(valor1, valor2) {
    if (valor2 === 0) {
        return "Erro: Divisão por zero";
    }
    return valor1 / valor2;
}

console.log(dividir(10, 2));