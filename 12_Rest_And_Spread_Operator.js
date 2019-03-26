//Rest Operator

function a1(...numbers) {
    return numbers;
}

a1(1, 2, 3, 4, 5, 6, 7, 8, 9);

//Spread Operator

const a = [1, 2];
const b = [3, 4];

const c = [a, b];
const d = [...a, ...b];
const e = [...a, ...b, 100];
console.log(c);
console.log(d);
console.log(e);