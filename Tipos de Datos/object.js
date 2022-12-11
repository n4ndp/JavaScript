const ob1 = {};
const ob2 = new Object();

const ob3 = {
    // atributos
    nombre: "Fernando",
    apellido: "Choqque",
    edad: 20,
    lenguajes: ["cpp", "py", "js"],
    contacto: {
        email: "FernandoChoqque@gmail.com",
        instagram: "n4nd0.p3",
        movil: "123456789"
    },

    // métodos
    saludar1: function () { console.log("Hola, mi nombre es", this.nombre, this.apellido); },
    saludar2: function () { console.log("Hola, mi nombre es", ob3["nombre"], ob3["apellido"]); },
    saludar3: function () { console.log("Hola, mi nombre es", ob3.nombre, ob3.apellido); }
}

console.log(ob3.nombre);
console.log(ob3["nombre"]);
ob3.saludar1();

console.log(Object.keys(ob3));
console.log(Object.values(ob3));
console.log(ob3.hasOwnProperty("nombre"));
console.log(ob3.hasOwnProperty("despedir1"));