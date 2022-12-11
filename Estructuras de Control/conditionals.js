// if - else
let age = 20;

if (age >= 18) { console.log("mayor de edad"); }
else { console.log("menor de edad"); }

if (age > 17) { console.log("mayor de edad"); }
else { console.log("menor de edad"); }

// if - else if - else
let time = 17;

if (time >= 0 && time <= 11) { console.log("buenos dias"); }
else if (time <= 18) { console.log("buenas tardes"); }
else { console.log("buenas noches"); }

if (time < 12) { console.log("buenos dias"); }
else if (time < 19) { console.log("buenas tardes"); }
else { console.log("buenas noches"); }

// operador ternario    (condition) ? true : false
let my = (age >= 18) ? "mayor de edad" : "menor de edad";

console.log(my);

// switch - case
let day = 2;

switch (day)
{
    case 1: console.log("lunes"); break;
    case 2: console.log("martes"); break;
    case 3: console.log("miércoles"); break;
    case 4: console.log("jueves"); break;
    case 5: console.log("viernes"); break;
    case 6: console.log("sábado"); break;
    case 0: console.log("domingo"); break;

    default: console.log("no esixte"); break;
}