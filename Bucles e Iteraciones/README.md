# **Bucles e Iteraciones**

| Tipo de bucle | Descripción |
|-|-|
| `while` | Bucles simples. |
| `for` | Bucles clásicos por excelencia. |
| `do..while` | Bucles simples que se realizan siempre como mínimo una vez. |
| `for..in` | Bucles sobre posiciones de un array. |
| `for..of` | Bucles sobre elementos de un array. |
| [Array functions](https://javascript.info/) | Bucles específicos sobre arrays. |

## **Bucle `while`**

```js
i = 0; // Inicialización de la variable contador

// Condición: Mientras la variable contador sea menor de 5
while (i < 5) {
    console.log("Valor de i:", i);
    i = i + 1; // Incrementamos el valor de i
}
```

## **Bucle `for`**

```js
// for (inicialización; condición; incremento)
for (i = 0; i < 5; i++) {
    console.log("Valor de i:", i);
}
```

## **Incremento múltiple**

```js
for (i = 0, j = 5; i < 5; i++, j--) {
    console.log("Valor de i y j:", i, j);
}
```