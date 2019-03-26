//Array Helper Methods
//map
// Find square of numbers
var numbers = [1, 2, 3, 4, 5, 6];

var sq = numbers.map(function (number) {
    return number * number;
});

console.log(sq);

// Find area of image

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

var heights = images.map(function (image) {
    return image.height;
});

console.log(heights);

