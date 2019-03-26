//Array Helper Methods
//every

// Find if all are even numbers
var objects = [2, 4, 6, 8, 3, 5];

var alleven = objects.every(function (obj) {
    return obj % 2 == 0
});

console.log(alleven);