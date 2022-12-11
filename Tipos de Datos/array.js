const arr1 = [];
const arr2 = [1, true, "true"];
const arr3 = [1, true, "true", [1, true, "true"]];

console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log(arr2.length);
console.log(arr2[1]);
console.log(arr3[3][2]);

const arr4 = Array.of("a", "e", "i", "o", "u", 1, 2, 3, 4, 5);
const arr5 = Array(10).fill(false);
const arr6 = new Array("a", "e", "i", "o", "u", 1, 2, 3, 4, 5);

console.log(arr4);
console.log(arr5);
console.log(arr6);

const arr7 = [1, true, "true"];

console.log(arr7);
arr7.push("uno");
console.log(arr7);
arr7.pop();
console.log(arr7);

arr7.forEach(
    function (e, index)
    {
        console.log(`<li id="${index}">${e}</li>`);
    }
)