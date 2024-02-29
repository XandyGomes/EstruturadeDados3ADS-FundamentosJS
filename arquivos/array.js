const valores = [7,8,9,10,11]

// console.log(valores)
// console.log(valores[2], valores[4])

// console.log(valores.length)

valores[5] = 20 
 
// console.log(valores)
valores.push({id:3}, false, 10+15, "texto")
console.log(valores)

console.log("peguei o ", valores.pop())
console.log("peguei o ", valores.pop())
console.log("peguei o ", valores.pop())
console.log(valores)

delete valores[0]

console.log(valores)