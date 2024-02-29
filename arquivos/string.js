const facul = "FATEC" 

var a, b, c, d, e

a = facul.charAt(0)
b = facul.charAt(1)
c = facul.charAt(2)
d = facul.charAt(3)
e = facul.charAt(4)

document.getElementById("root").innerHTML = a + b + c + d + e
document.getElementById("root").innerHTML = facul.charAt(5)
document.getElementById("root").innerHTML = facul.charCodeAt(0)
document.getElementById("root").innerHTML = facul.indexOf("C")
document.getElementById("root").innerHTML = facul.substring(2)
document.getElementById("root").innerHTML = facul.substring(1, 4)
document.getElementById("root").innerHTML = "Faculdade ".concat(facul).concat("!")
document.getElementById("root").innerHTML = facul.replace("F", 3)
document.getElementById("root").innerHTML = "Alex,Joao,Pedro".split(",")
console.log("Alex, Joao, Pedro".split(", "))




