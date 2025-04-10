const prompt = require("prompt-sync")();

let numero = prompt("Ingrese 3 numeros: ")
let numeros = numero.split(",")
let ordenados = []
ordenados.push(Math.max(...numeros));

for(let i = 0; i <= 3; i++){
if(numeros[i] != Math.max(...numeros) && numeros[i] != Math.min(...numeros) && numeros[i] && numeros[i] != undefined) {
    ordenados.push(Number(numeros[i]));
    
}else if(Math.max(...numeros) == numeros[i] || Math.min(...numeros) == numeros[i]){
    ordenados.push(Number(numeros[i]));
    break;
}
}

ordenados.push(Math.min(...numeros));

console.log(ordenados);
console.log(ordenados.slice().reverse());



