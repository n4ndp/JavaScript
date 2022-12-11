let a = 1;
let b = new Number(2);
let c = 7.19;
let d = "5.6";

console.log(a);
console.log(b);
console.log(c.toFixed(1));
console.log(c.toFixed(5));
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(typeof a, typeof b, typeof c, typeof d);
console.log(a + b);
console.log(c + parseInt(d));
console.log(c + parseFloat(d));
console.log(c + Number.parseInt(d));
console.log(c + Number.parseFloat(d));