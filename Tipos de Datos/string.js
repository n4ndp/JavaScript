let s1 = "Hello";
let s2 = 'World';
let s3 = new String("Hello World");
let lorem = "           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus provident maxime placeat quibusdam laudantium, accusamus consectetur. Recusandae quod maxime, fugiat modi ullam libero dolorem, optio pariatur rerum, minus earum. Maxime.           ";

console.log(s1, s2, s3);
console.log(s1.length, s2.length, s3.length);

console.log(s1.toUpperCase());
console.log(s2.toLowerCase());

console.log(lorem.includes("elit"));
console.log(lorem.includes("case"));

console.log(lorem.trim());

console.log(lorem.split(" "));

// concatenacion sin template strings

let nu = "Fernando";
let snu = "Choqque";
let hello1 = "Hola, mi nombre es " + nu + " " + snu + ".";
console.log(hello1);


// concatenacion con template strings

let hello2 = `Hola, mi nombre es ${nu} ${snu}.`;
console.log(hello2);