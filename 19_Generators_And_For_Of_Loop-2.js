// Normal function

function printTask() {
    console.log('Start !!');
    console.log('1');
    console.log('2');
    console.log('End !!');
    return;
}

printTask();
console.log('--------------------------');
printTask();
console.log('--------------------------');

// Generator
// Produces sequence of results instead of a single on

function* printTask1() { 
    console.log('Start !!');
    yield 'Started'; // Pause the generator

    console.log('1');
    yield 'Printed1'; // Pause the generator

    console.log('2');
    yield 'Printed1'; // Pause the generator

    console.log('End !!');
    yield 'Ended';
}

const generatorObject = printTask1();

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());