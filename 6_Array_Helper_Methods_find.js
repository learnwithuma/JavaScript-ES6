//Array Helper Methods
//find
// Example 1
var products = [
    { name: 'A' },
    { name: 'B' },
    { name: 'C' }
]

var product = products.find(function (product) {
    return product.name === 'B';
})

console.log(product);

// Example 2

var users = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' }
];

var admin = users.find(function (user) {
    return user.id === 2;
});

console.log(admin);
//-------------------------------------------------------------------

var ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 }
]

function findWhere(array, criteria) {
    var findProperty = Object.keys(criteria)[0];

    return array.find(function (element) {
        return element[findProperty] === criteria[findProperty];
    });
}

findWhere(ladders, { height: 25 });

