# **Operadores en JS**

## **Operadores aritméticos**

| Nombre | Operador |
|-|-|
| Suma | `a + b` |
| Resta | `a - b` |
| Multiplicación | `a * b` |
| División | `a / b` |
| Módulo | `a % b` |
| Exponenciación | `a ** b` |

## **Operadores de asignación**

| Nombre | Operador |
|-|-|
| Asignación | `c = a + b` |
|Suma y asignación | `a += b` |
|Resta y asignación	| `a -= b` |
|Multiplicación y asignación | `a *= b` |
|División y asignación | `a /= b` |
|Módulo y asignación | `a %= b` |
|Exponenciación y asignación | `a **= b` |

## **Operadores unarios**

| Nombre | Operador |
|-|-|
| Incremento | `a++` |
| Decremento | `a--` |
| Incremento previo | `++a` |
| Decremento previo | `--a` |
| Resta unaria | `-a` |

## **Operadores de comparación**

| Nombre | Operador |
|-|-|
| igualdad | `a == b` |
| desigualdad | `a != b` |
| mayor que | `a > b` |
| mayor/igual que | `a >= b` |
| menor que | `a < b` |
| menor/igual que | `a <= b` |
| identidad | `a === b` |
| no idéntico | `a !== b` |

Recuerda que en Javascript, hay diferencia entre `==` (igualdad) y `===` (identidad). Mientras que el primero sólo comprueba el valor de la comparación, el segundo comprueba el valor y el tipo de dato de la comparación.

```js
5 == 5        // true     (ambos son iguales, coincide su valor)
"5" == 5      // true     (ambos son iguales, coincide su valor)
5 === 5       // true     (ambos son idénticos, coincide su valor y su tipo de dato -número-)
"5" === 5     // false    (no son idénticos, coincide su valor, pero no su tipo de dato -string y número-)
```

## **Operadores de Strings**

| Nombre | Operador |
|-|-|
| Concatenación de texto | `a + b` |
| Conversión a número (Suma unaria) | `+a` |

## **Operadores lógicos**

| Nombre | Operador |
|-|-|
| AND | `a && b` |
| Operador ternario | `a ? b : c` |
| OR | `a || b` |
| Nullish coalescing | `a ?? b` |
| Operador de asignación lógica nula | `a ??= b` |
| Operador de encadenamiento opcional | `data?.name` |
| NOT | `!a` |

El operador nullish coalescing (unión nula) es un operador lógico muy similar al operador OR, pero con ciertos matices y cambios. A grandes rasgos, se puede decir que el operador `a ?? b` devuelve `b` sólo cuando `a` es `undefined` o `null`. Al contrario que el operador OR, con valores como `false`, `0` o `""`, no devuelve `b`.

```js
42 || 50          // 42
42 ?? 50          // 42 (ambos se comportan igual)
false || 50       // 50 (false es un valor falsy, devuelve el segundo)
false ?? 50       // false (la parte izquierda no es null ni undefined, devuelve el primero)
0 || 50           // 50 (0 es un valor falsy, devuelve el segundo)
0 ?? 50           // 0 (la parte izquierda no es null ni undefined, devuelve el primero)
null || 50        // 50 (null es un valor falsy, devuelve el segundo)
null ?? 50        // 50 (devuelve el primero)
undefined || 50   // 50 (undefined es un valor falsy, devuelve el segundo)
undefined ?? 50   // 50 (devuelve el primero)
```