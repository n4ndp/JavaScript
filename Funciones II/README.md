# **Funciones II**

```js
typeof function () {}; // 'function'
```

## **Creación de funciones**

| Constructor | Descripción |
|-|-|
| `FUNCTION` function nombre(p1, p2...) { } | Crea una función mediante **declaración**. |
| `FUNCTION` var nombre = function(p1, p2...) { } | Crea una función mediante **expresión**. |
| `FUNCTION` new Function(p1, p2..., code); | Crea una función mediante un constructor de **objeto**. |

## **Funciones por declaración**

Esta forma permite declarar una función que existirá a lo largo de todo el código:

```js
function saludar() {
    return "Hola";
}

saludar(); // 'Hola'
typeof saludar; // 'function'
```

Podríamos ejecutar la función `saludar()` incluso antes de haberla creado y funcionaría correctamente, ya que Javascript primero busca las declaraciones de funciones y luego procesa el resto del código.

## **Funciones por expresión**

Se trata de un enfoque diferente, creación de funciones por expresión, que fundamentalmente, hacen lo mismo con algunas diferencias:

```js
// El segundo "saludar" (nombre de la función) se suele omitir: es redundante
const saludo = function saludar() {
    return "Hola";
};

saludo(); // 'Hola'
```

Con este nuevo enfoque, estamos creando una función en el interior de una variable, lo que nos permitirá posteriormente ejecutar la variable (como si fuera una función).

## **Funciones como objetos**

```js
const saludar = new Function("return 'Hola';");

saludar(); // 'Hola'
```

## **Funciones anónimas**

Las funciones anónimas o funciones lambda son un tipo de funciones que se declaran sin nombre de función y se alojan en el interior de una variable y haciendo referencia a ella cada vez que queramos utilizarla:

```js
// Función anónima "saludo"
const saludo = function () {
    return "Hola";
};

saludo; // ƒ () { return 'Hola'; }
saludo(); // 'Hola'
```

## **Callbacks**

A grandes rasgos, un `callback` (llamada hacia atrás) es pasar una función B por parámetro a una función A, de modo que la función A puede ejecutar esa función B de forma genérica desde su código, y nosotros podemos definirlas desde fuera de dicha función:

```js
// fB = Función B
const fB = function () {
    console.log("Función B ejecutada.");
};

// fA = Función A
const fA = function (callback) {
    callback();
};

fA(fB);
```

Esto nos podría permitir crear varias funciones para utilizar a modo de callback y reutilizarlas posteriormente con diferentes propósitos.

```js
// fB = Función B (callback)
const fB = function () {
    console.log("Función B ejecutada.");
};

// fError = Función Error (callback)
const fError = function () {
    console.error("Error");
};

// fA = Función A
const fA = function (callback, callbackError) {
    const n = ~~(Math.random() * 5);
    if (n > 2) callback();
    else callbackError();
};

fA(fB, fError); // Si ejecutamos varias veces, algunas darán error y otras no
```

Viendo este ejemplo, podemos planear ejecutar la función `fA()` cambiando los callbacks según nos interese, sin necesidad de crear funciones con el mismo código repetido una y otra vez. Además, en el caso de que las funciones `callbacks` sean muy cortas, muchas veces utilizamos directamente la función anónima, sin necesidad de guardarla en una variable previamente:

```js
// fA = Función A
const fA = function (callback, callbackError) {
    const n = ~~(Math.random() * 5);
    if (n > 2) callback();
    else callbackError();
};

fA(
    function () {
        console.log("Función B ejecutada.");
    },
    function () {
        console.error("Error");
    }
);
```

## **Funciones autoejecutables**

Básicamente, sólo tenemos que envolver entre paréntesis la función anónima en cuestión (no necesitamos que tenga nombre, puesto que no la vamos a guardar) y luego, ejecutarla:

```js
// Función autoejecutable
(function () {
    console.log("Hola!!");
})();

// Función autoejecutable con parámetros
(function (name) {
    console.log(`¡Hola, ${name}!`);
})("Manz");
```

```js
const f = (function (name) {
    return `¡Hola, ${name}!`;
})("Manz");

f; // '¡Hola, Manz!`
typeof f; // 'string'
```

## **Clausuras**

A grandes rasgos, en Javascript, una clausura o cierre se define como una función que «encierra» variables en su propio ámbito (y que continúan existiendo aún habiendo terminado la función). Por ejemplo, veamos el siguiente ejemplo:

```js
// Clausura: Función incr()
const incr = (function () {
    let num = 0;
    return function () {
        num++;
        return num;
  };
})();

typeof incr; // 'function'
incr(); // 1
incr(); // 2
incr(); // 3
```

Tenemos una función anónima que es también una función autoejecutable. Aunque parece una función por expresión, no lo es, ya que la variable `incr` está guardando lo que devuelve la función anónima autoejecutable, que a su vez, es otra función diferente.

La «magia» de las clausuras es que en el interior de la función autoejecutable estamos creando una variable `num` que se guardará en el ámbito de dicha función, por lo tanto existirá con el valor declarado: `0`.

Por lo tanto, en la variable `incr` tenemos una función por expresión que además conoce el valor de una variable `num`, que sólo existe dentro de `incr`. Si nos fijamos en la función que devolvemos, lo que hace es incrementar el valor de `num` y devolverlo. Como la variable `incr` es una clausura y mantiene la variable en su propio ámbito, veremos que a medida que ejecutamos `incr()`, los valores de `num` (que estamos devolviendo) conservan su valor y se van incrementando.