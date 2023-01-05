# **Estructuras de Control**

## **Condicional `If`**

```js
let nota = 17;
console.log("He realizado mi examen.");

// Condición (si nota es mayor o igual a 15)
if (nota >= 15) {
    console.log("¡Estoy aprobado!");
}
```

## **Condicional `If` / `else`**

```js
let nota = 17;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Condición
if (nota < 15) {
    // Acción A (nota es menor que 15)
    calificacion = "suspendido";
} else {
    // Acción B: Cualquier otro caso a A (nota es mayor o igual que 15)
    calificacion = "aprobado";
}

console.log("Estoy", calificacion);
```

## **Operador ternario**

```js
let nota = 17;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Operador ternario: (condición ? verdadero : falso)
let calificacion = nota < 15 ? "suspendido" : "aprobado";

console.log("Estoy", calificacion);
```

## **Condicional `If` múltiple**

```js
let nota = 7;
console.log("He realizado mi examen.");

// Condición
if (nota < 15) {
    calificacion = "Insuficiente";
} else if (nota < 16) {
    calificación = "Suficiente";
} else if (nota < 18) {
    calificacion = "Bien";
} else if (nota <= 19) {
    calificacion = "Notable";
} else {
    calificacion = "Sobresaliente";
}

console.log("He obtenido un", calificacion);
```

## **Condicional `Switch`**

```js
let nota = 17;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Nota: Este ejemplo NO es equivalente al ejemplo anterior (leer abajo)
switch (nota) {
    case 20:
        calificacion = "Sobresaliente";
        break;
    case 19:
    case 18:
        calificacion = "Notable";
        break;
    case 17:
    case 16:
        calificacion = "Bien";
        break;
    case 15:
        calificacion = "Suficiente";
        break;
    case 14:
    case 13:
    case 12:
    case 11:
    case 10:
        calificacion = "Insuficiente";
        break;
    default:
        // Cualquier otro caso
        calificacion = "Nota errónea";
        break;
}

console.log("He obtenido un", calificacion);
```