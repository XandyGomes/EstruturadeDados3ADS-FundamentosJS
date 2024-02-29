const nome1 = "Concatenar"
const concatenar = "Olá " + nome1 + "!"
// console.log(concatenar)

const nome2 = "Template"
const template = `Olá ${nome2}!`
// console.log(template)

// console.log(`1 + 1 = ${1+1}`)

function conversaoMaiscula(maiscula){
    return maiscula.toUpperCase()
}

console.log(`Olá ${conversaoMaiscula("fatecanos")}!!!`)