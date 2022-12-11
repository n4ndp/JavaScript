// while
let cont = 0;

while (cont < 10)
{
    console.log(cont);
    cont++;
}

// do - while
do
{
    console.log(cont);
    cont++;
}
while (cont < 10);

// for
for (let index = 0; index < 10; index++)
{
    console.log(index);
}

// forIn
const ob1 = {
    nombre: "Fernando",
    apellido: "Choqque",
    edad: 20,
}

for (const key in ob3)
{
    console.log(`key: ${key}, value: ${ob3[key]}`);
}

// forOf
const arr1 = [1, 2, 3, 4, 5, 6 ,7, 8, 9];
let s1 = "Hello World"

for (const iterator of arr1)
{
    console.log(iterator);
}

for (const iterator of s1)
{
    console.log(iterator);
}