// declaración
function f(/* params */)
{
    console.log("a");
    console.log("e");
    console.log("a");
    /* return */
}
// invocación
f();

/*
    Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente, una función puede aceptar parámetros y devolver un valor.

    Las funciones en JavaScript son objetos, un tipo especial de objetos.

    Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.
*/

function f1()
{
    console.log("aea");
}

function f2()
{
    return "aea";
}

function f3(param1, param2)
{
    console.log("Hola, mi nombre es ", param1, " y tengo ", param2, " años.");
}

function f4(param1 = "x", param2 = "y")
{
    console.log("Hola, mi nombre es ", param1, " y tengo ", param2, " años.");
}

/*
funciones declaradas VS funciones expresadas

funciones declaradas: puedo usarlas antes de su inicialización
funciones expresadas: no puedo usarlas antes de su inicialización
*/

fd();
function fd()
{
    console.log("Esto es una función declarada");
}
fd();

// fe(); error
const fe = function ()
{
    console.log("Esto es una función expresada");
}
fe();