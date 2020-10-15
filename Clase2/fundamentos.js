//Variables
let x = 3;
let y = 4;
// Backtick string
console.log(`x+y = ${x+y}`);``
console.log(` x - y = ${x - y}`);
console.log(` x * y = ${x * y}`);
console.log(` x/y = ${x / y}`);
console.log(` x % y = ${x % y}`);

//Condicionales
let w;
do{
w = parseFloat (prompt("Ingrese un numero"));
} while(Number.isNaN(w))
//parsefloat convierte una cadena de caracteres en un numero decimal
console.log(w);
if(w > 0){
    console.log(`${w} es positivo`);
} else{
    if (w < 0) console.log(`${w} es negativo`);
    else console.log(`${w} es cero`);
}