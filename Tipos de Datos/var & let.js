var h1 = "hello world - 1";
let h2 = "hello world - 2"; 

console.log(h1);
console.log(h2);
console.log(window.h1);
console.log(window.h2);

// var define una variable global o local en una función sin importar el ámbito del bloque.
var v1 = "out";
console.log("out", v1);
{
    var v1 = "in";
    console.log("in", v1);
}
console.log("out", v1);

// let permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando.
let v2 = "out";
console.log("out", v2);
{
    let v2 = "in";
    console.log("in", v2);
}
console.log("out", v2);