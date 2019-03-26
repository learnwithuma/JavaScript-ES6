// Generator delegation

const department = {
    name: 'sales',
    manager: 'John',
    passcode: 'passcode'
}

const user = {
    name: 'Dave',
    role: 'Author',
    salary: '10000',
    password: 'asdfgh',
    secretQuestion: 'What is the place of birth ? ABC',
    department: department
}

function* userdetails(user) {
    yield user.name;
    yield user.role;
    yield user.salary;
    const departmentGenerator = departmentdetails(user.department);
    yield* departmentGenerator;
}

function* departmentdetails(department) {
    yield department.name;
    yield department.manager;
}

const properties = [];
for (let prop of userdetails(user)) {
    properties.push(prop);
}

console.log(properties);