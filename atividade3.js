//a) 1,3,5,7__
var r = 2 //substiruir pela razão desejada
var a1 = 1 //substituir pelo valor inicial
var aN = 0
var c = 4 //substituir pelo número de elementos que deseja inserir
let pA = []
pA.push(a1)
aN = a1
for (let index = 0; index < c; index++) {
    
    aN = aN+r
    pA.push(aN)
    
}
console.log(pA)

//b) 2, 4, 8, 16, 32, 64, ____
r = 2 //substiruir pela razão desejada
a1 = 2 //substituir pelo valor inicial
var aN = 0
var c = 6 //substituir pelo número de elementos que deseja inserir
let pG = []
pG.push(a1)
aN = a1
for (let index = 0; index < c; index++) {
    
    aN = aN*r
    pG.push(aN)
    
}
console.log(pG)

//c)  0, 1, 4, 9, 16, 25, 36, ____
r = 1 //substiruir pela razão desejada
a1 = 0 //substituir pelo valor inicial
var aN = 0
var c = 6 //substituir pelo número de elementos que deseja inserir
pG = []
pG.push(a1)
pG.push(r)
aN = aN+r
for (let index = 0; index < c; index++) {
    r=r+2
    aN = aN+r
    pG.push(aN)
    
}
console.log(pG)

//d) 4, 16, 36, 64, 100
//e)1, 1, 2, 3, 5, 8, 13
//2,10, 12, 16, 17, 18, 19, 200