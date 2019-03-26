// Generators and for of loop

const user = {
    name: 'Dave',
    role: 'Author',
    salary: '10000',
    password: 'asdfgh',
    secretQuestion: 'What is the place of birth ? ABC'
}

function* details(user) {
    yield user.name;
    yield user.role;
    yield user.salary;
}

const properties = [];
for (let prop of details(user)) {
    properties.push(prop);
}

console.log(properties);
