//Array Helper Methods

//reduce

// Find sum of numbers
var numbers = [2, 4, 6, 8, 3, 5];

var sum = numbers.reduce(
    function (sum, number) {
        return sum + number
    }, 0);

console.log(sum);

// Validate the given expression with paranthesis for open and close
var exp = ")(";

var arr = exp.split('');

var val = arr.reduce(function (previous, element) {
    if (previous < 0) {
        return previous
    }
    else if (element === '(') {
        return previous + 1;
    } else if (element === ')') {
        return previous - 1;
    }
}, 0);

console.log(val);

// Find unique numbers in an array

var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
    return array.reduce(function (previous, number) {
        var a = previous.find(function (n) {
            return n === number
        });
        if (!a) {
            previous.push(number);
            return previous;
        } else {
            return previous;
        }
    }, []);
}

unique(numbers)