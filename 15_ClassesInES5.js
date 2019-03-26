// Classes and Inhertitance

// Basic properties and function in ES5

function User(user) {
    this.name = user.name;
    this.role = user.role;
}

User.prototype.getMessage = function () {
    return 'Hi User';
}

var user = new User({ name: 'Dave', role: 'author' });
console.log(user);
console.log(user.getMessage());