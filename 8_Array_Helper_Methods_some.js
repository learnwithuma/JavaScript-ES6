//Array Helper Methods
//some

// Find if some are even numbers
var objects = [2, 4, 6, 8, 3, 5];

var someeven = objects.some(function (obj) {
    return obj % 2 == 0
});
console.log(someeven);

