const prompt = require("prompt-sync")();

let input = prompt("Ingrese 3 números separados por coma: "); // ejemplo: 5,8,3

// Convertimos los strings a números
let numeros = input.split(",").map(Number);

// Orden ascendente
let ordenados = numeros.slice().sort((a, b) => a - b);

console.log(ordenados);

// Orden descendente
console.log(ordenados.slice().reverse());



