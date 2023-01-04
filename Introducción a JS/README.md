# **Introducción a JS**

## **1. Comentarios**

Comentario de una sola linea:

```js
// This is an in-line comment.
```

Comentario de varias lineas:

```js
/* This is a
multi-line comment */
```

## **2. Consola**

Para acceder a la consola Javascript del navegador, podemos pulsar `CTRL` + `SHIFT` + `J`. (el atajo no funciona en todos los navegadores).

```js
console.log("Hello World");
```

| Función | Descripción |
|-|-|
| `console.log()` | Muestra la información proporcionada en la consola Javascript. |
| `console.info()` | Equivalente al anterior. Se utiliza para mensajes de información. |
| `console.warn()` | Muestra información de advertencia. Aparece en amarillo. |
| `console.error()` | Muestra información de error. Aparece en rojo. |
| `console.clear()` | Limpia la consola. Equivalente escribir **clear()** |

## **3. Variables**

JavaScript proporciona ocho tipos de datos diferentes que son `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number` y `object`.

```js
var text = "Hello World";
var number = 42;
var boolean = true;
var notDefined;   // undefined
```

Podemos ver el tipo de dato de una variable con la función `typeof()`

```js
console.log(typeof text);       // "String"
console.log(typeof number);     // "Number"
console.log(typeof boolean);    // "Boolean"
console.log(typeof notDefined); // undefined
```

    OJO: La función typeof() no nos servirá para variables con tipos de datos más complejos. Es mejor utilizar constructor.name

```js
console.log(text.constructor.name);       // String
console.log(number.constructor.name);     // Number
console.log(boolean.constructor.name);    // Boolean
console.log(notDefined.constructor.name); // ERROR, sólo funciona con variables definida
```

    OJO: Las mayúsculas y minúsculas en los nombres de las variables de Javascript importan. No es lo mismo una variable llamada precio que una variable llamada Precio, pueden contener valores diferentes.

### **keyword: var**

```js
console.log(myVar); // Muestra "undefined", en este punto la variable "myVar" no existe
var myVar = 40;
console.log(myVar); // Aquí muestra 40, existe porque ya se ha inicializado anteriormente
```

En el ejemplo anterior, el ámbito de la variable `myVar` comienza a partir de su inicialización y "vive" hasta el final del programa. A esto se le llama **ámbito global**.

```js
var myVar = 1;
console.log(myVar); // Aquí accedemos a la "myVar" global, que vale 1

function x() {
    console.log(myVar); // En esta línea el valor de "myVar" es undefined
    var myVar = 5; // Aquí creamos una variable "myVar" a nivel de función

    console.log(myVar); // Aquí el valor de "myVar" es 5 (a nivel de función)
    console.log(window.myVar); // Aquí el valor de "myVar" es 1 (ámbito global)
}

x(); // Aquí se ejecuta el código de la función x()
console.log(myVar); // En esta línea el valor de "myVar" es 1
```

```js
var myVar = 1;
console.log(myVar); // Aquí accedemos a la "myVar" global, que vale 1

function x() {
    console.log(myVar); // En esta línea el valor de "myVar" es 1
    myVar = 5; // Aquí creamos una variable "myVar" en el ámbito anterior

    console.log(myVar); // Aquí el valor de "myVar" es 5 (a nivel de función)
    console.log(window.myVar); // Aquí el valor de "myVar" es 5 (ámbito global)
}

x(); // Aquí se ejecuta el código de la función x()
console.log(myVar); // En esta línea el valor de "myVar" es 5
```

Siempre que sea posible se debería utilizar `let` y `const`, en lugar de `var`. Declarar variables mediante `var` se recomienda en fases de aprendizaje o en el caso de que se quiera mantener compatibilidad con navegadores muy antiguos utilizando ECMAScript 5, sin embargo, hay estrategias mejores a seguir que utilizar `var` en la actualidad.

### **keyword: let**

En las versiones modernas de Javascript (ES6 o ECMAScript 2015) o posteriores, se introduce la palabra clave `let` en sustitución de `var`. Con ella, en lugar de utilizar los **ámbitos globales y a nivel de función** (`var`), utilizamos los ámbitos clásicos de programación: **ámbito global y ámbito local**.

```js
/** Opción 1: Bucle con let **/

console.log("Antes: ", p);      // Antes: undefined
for (let p = 0; p < 3; p++) {
    console.log("- ", p);       // Durante: 0, 1, 2
}
console.log("Después: ", p);    // Después: undefined

/** Opción 2: Bucle con var **/

console.log("Antes: ", p);      // Antes: undefined
for (var p = 0; p < 3; p++) {
    console.log("- ", p);       // Durante: 0, 1, 2
}
console.log("Después: ", p);    // Después: 3 (WTF!)
```

### **keyword: const**

De forma tradicional, Javascript no incorporaba constantes. Sin embargo, en ECMAScript 2015 (ES6) se añade la palabra clave `const`, que inicializada con un valor concreto, permite crear variables con valores que no pueden ser cambiados.

```js
const NAME = "Leonel";
console.log(NAME);
```