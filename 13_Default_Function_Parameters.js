//Default function parameters

function sum1(a, b) {
    if (a === undefined) {
        a = 0;
    }

    if (b === undefined) {
        b = 0;
    }

    return a + b;
}

function sum2(a = 0, b = 0) {

    return a + b;
}


// To print the sum of 2 numbers

function sum3(a = Math.random(), b = Math.random()) {

    return a + b;
}

console.log(sum3());