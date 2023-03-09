var num = 0
var numant = 0
var numult = 1
var ache = 55 //substituir pelo número que deseja encontrar
var c = 30 //substituir pelo número de elementos que deseja inserir
let fib = []

fib.push(num)
num=num+1
for (let index = 0; index < c; index++) {
    
    fib.push(num)
    num = numult + numant
    numant = numult
    numult = num
    
}
console.log(fib)

let achar = fib.indexOf(ache)

if (achar!=-1){
    console.log('O número pertence a sequência.')
} else{
    console.log('O número não pertence a sequência.')
}