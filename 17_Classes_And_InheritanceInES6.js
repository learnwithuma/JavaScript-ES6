//Classes and Inheritance in ES6

class User {

    constructor(user) {
        this.name = user.name;
        this.role = user.role;
    }
    getMessage() {
        return 'Hi User';
    }
}

var user = new User({ name: 'Dave', role: 'author' });
user
user.getMessage();

class AdminUser extends User {
    constructor(user) {
        super(user);
        this.privileged = user.privileged;
    }
    isAdmin() {
        return "Yes, I am an admin";
    }
}

var adminuser = new AdminUser({ name: 'John', role: 'author', privileged: true });

console.log(adminuser);
console.log(adminuser.getMessage());
console.log(adminuser.isAdmin());