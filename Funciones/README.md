# **Funciones**

## **Declaración**

```js
// Declaración de la función "saludar"
function saludar() {
    // Contenido de la función
    console.log("Hola, soy una función");
}
```

## **Ejecución**

```js
// Declaración de la función "saludar"
function saludar() {
    // Contenido de la función
    console.log("Hola, soy una función");
}

// Ejecución de la función
saludar();
```

## **¿Qué son los parámetros?**

A las funciones se les pueden pasar **parámetros**, que no son más que variables que existirán sólo dentro de dicha función, con el valor pasado desde la ejecución.

Veamos el siguiente ejemplo, utilizando el parámetro `hasta`:

```js
// Declaración
function tablaDelUno(hasta) {
    for (i = 0; i <= hasta; i++) {
        console.log("1 x", i, "=", 1 * i);
    }
}

// Ejecución
tablaDelUno(10);
tablaDelUno(5);
```

## **Parámetros múltiples**

```js
// Declaración
function tablaMultiplicar(tabla, hasta) {
    for (i = 0; i <= hasta; i++) {
        console.log(tabla, "x", i, "=", tabla * i);
    }
}

// Ejecución
tablaMultiplicar(1, 10); // Tabla del 1
tablaMultiplicar(5, 10); // Tabla del 5
```

## **Parámetros por defecto**

```js
function tablaMultiplicar(tabla, hasta = 10) {
    for (i = 0; i <= hasta; i++) {
        console.log(tabla, "x", i, "=", tabla * i);
    }
}

// Ejecución
tablaMultiplicar(2); // Esta tabla llegará hasta el número 10
tablaMultiplicar(2, 15); // Esta tabla llegará hasta el número 15
```

## **Devolución de valores (keyword: `return`)**

```js
// Declaración
function sumar(a, b) {
    return a + b; // Devolvemos la suma de a y b al exterior de la función
    console.log("Ya he realizado la suma."); // Este código nunca se ejecutará
}

// Ejecución
let resultado = sumar(5, 5); // Se guarda 10 en la variable resultado
```