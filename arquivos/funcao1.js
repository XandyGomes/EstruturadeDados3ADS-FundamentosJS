//função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

// imprimirSoma(2, 5)

//função com retorno

function somaRetorno(a, b = 8){
    return a + b
}

console.log(somaRetorno(2, 5))
console.log(somaRetorno(2))