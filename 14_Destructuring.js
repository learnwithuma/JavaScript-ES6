// Destructuring

// Destructuring object properties

let box = {
    nams: ["apple", "orange"],
    type: "fruit"
};

const nams = box.nams;
const type = box.type;

let box1 = {
    names1: ["apple", "orange"],
    type1: "fruit"
};

const { names1 } = box1;
const { type1 } = box1;

// Destructuring function arguments
let computer = {
    name: 'acer',
    processor: 'ARM',
    RAM: '2GB'
}

// Destructuring object properties
function getComputerName({ name, processor, RAM }, { user }) {
    return ` ${user} says "My computer name is ${name} and the processor is ${processor} and the size is ${RAM}"`;
}

getComputerName(computer, { user: 'Dave' });

// Destructuring arrays

const techs = ['java', 'javascript', 'python'];

const [tech1, tech2, tech3, tech4] = techs;

console.log(tech1);
console.log(tech2);
console.log(tech3);
console.log(tech3);

const [techname, ...remaining] = techs;
console.log(remaining);

const { length } = techs;

console.log(length);

// Destructuring arrays
// Pulling object out of an array
var objects = [

    { name: "Glass", color: 'red' },
    { name: "Shoe", color: 'black' },
    { name: "Shirt", color: 'red' },
    { name: "Socks", color: 'black' }
];


const [{ color }] = objects;

console.log(color);

// Destructuring arrays
// Pulling an array element from an object

box = {
    nams: ["apple", "orange"],
    type: "fruit"
};

const { nams: [nam] } = box

console.log(nam);

const classes = [
    ['Chemistry', '9AM', 'Mr. Darnick'],
    ['Physics', '10:15AM', 'Mrs. Lithun'],
    ['Math', '11:30AM', 'Mrs. Vitalis']
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return { subject, time, teacher };
})

console.log(classesAsObject);