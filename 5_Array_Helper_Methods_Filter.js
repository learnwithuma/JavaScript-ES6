//Array Helper Methods
//filter
// Filter all numbers greater than 50

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function (number) {
    return number > 50
});

console.log(filteredNumbers);

// Filter all objects of black color

var objects = [

    { name: "Glass", color: 'red' },
    { name: "Shoe", color: 'black' },
    { name: "Shirt", color: 'red' },
    { name: "Socks", color: 'black' }
];

var filteredObjs = objects.filter(function (obj) {

    return obj.color === 'black';
})

console.log(filteredObjs);

// Filter numbers less than 10 - implement reject

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function (number) {
    return number > 10;
});

function reject(array, iteratorFunction) {
    return array.filter(function (arr) {
        return !iteratorFunction(arr);
    });
}


console.log(lessThanFifteen);
