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

//Inheritance in ES5

function User(user) {
    this.name = user.name;
    this.role = user.role;
}

var user = new User({ name: 'Dave', role: 'author' });
console.log(user);

User.prototype.getMessage = function () {
    return 'Hi User';
}

console.log(user.getMessage());

function AdminUser(user) {
    User.call(this, user); // extra
    this.privileged = user.privileged;
}
AdminUser.prototype = Object.create(user); //extra

var adminuser = new AdminUser({ name: 'John', role: 'author', privileged: true });

console.log(adminuser);
console.log(adminuser.getMessage());
