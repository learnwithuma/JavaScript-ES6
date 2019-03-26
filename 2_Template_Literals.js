//Template literals
// Print first name and last name with a string literal
function getName() {
    const firstName = 'Dave';
    const lastName = 'John';
    return `My name is ${firstName} ${lastName}`;
}

console.log(getName());

// Concatenate first name and last name alone
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log(fullName());
