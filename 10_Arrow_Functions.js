// Arrow Functions

// Print first and last name
let names = () => {
    const firstName = 'Dave';
    const lastName = 'John';
    return `My name is ${firstName} ${lastName}`;
}

names();

// Arrow function with one argument to double the number

let double = (number) => 2 * number;
console.log(double(2));

// Arrow function with one argument to double the number - with Map iterator

let numbers = [1, 2, 3, 4];
numbers = numbers.map((number) =>
    2 * number
);

console.log(numbers);

// Without Arrow function - how the this keyword behaves - Workaround 1 using bind

let mybox = {
    name: ["apple", "orange"],
    type: "fruit",
    printName: function () {
        return this.name.map(function (fruitname) {
            return `I am ${this.type} ${fruitname}`;
        }.bind(this));
        // Use bind
    }
}

mybox.printName();

// Without Arrow function - how the this keyword behaves - Workaround 2 using self

let mybox1 = {
    name: ["apple", "orange"],
    type: "fruit",
    printName: function () {

        // assign to self
        let self = this;
        return this.name.map(function (fruitname) {
            return `I am ${self.type} ${fruitname}`;
        });
    }
}

mybox1.printName();

// With Arrow function - how the this keyword behaves

let mybox2 = {
    name: ["apple", "orange"],
    type: "fruit",
    printName: function () {
        return this.name.map((fruitname) =>
            `I am ${this.type} ${fruitname}`
        );
    },
    getType: function () {
        return this.type;
    }
}
mybox2.getType();
mybox2.printName();
