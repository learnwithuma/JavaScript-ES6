//Array Helper Methods
//foreach

// Find sum of numbers
var numbers = [1, 2, 3, 4, 5, 6];

var sum = 0;
numbers.forEach(function (number) {
    sum = sum + number;
});

console.log(sum);

// Find area of image

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
var areas = [];

function calculateArea(image) {
    areas.push(image.height * image.width);
}

images.forEach(calculateArea);

console.log(areas);
