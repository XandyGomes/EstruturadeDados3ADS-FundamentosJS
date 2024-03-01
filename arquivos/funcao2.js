//armazenar uma função em uma variável

const imprimirSoma = function (a, b){
    console.log(a+b)
}
imprimirSoma(2, 9)

const soma = (a, b) => {
    return a + b
}

console.log(soma(8, 10))

const sub = (a , b) => a - b
console.log(sub(6, 2))

const imp = a => console.log(a)

imp("teste")