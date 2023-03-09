let texto = 'Samuel Monteiro'
console.log(texto)
console.log(texto.length)

var maior = Number(texto.length)
var antes = maior
var c = 0
let invert=[]
while(c<=maior){
    let n = texto.substring((antes-1),antes)
    invert.push(n)
    antes--
    c++

}
console.log(invert)