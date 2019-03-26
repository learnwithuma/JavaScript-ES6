
// Symbol.iterator
// Teach a for of loop how to iterate over a generator

const department = {
  name: 'sales',
  manager: 'John',
  passcode: 'passcode',
  [Symbol.iterator]: function* () {
    yield this.name;
    yield this.manager;
  }
}

const user = {
  name: 'Dave',
  role: 'Author',
  salary: '10000',
  password: 'asdfgh',
  secretQuestion: 'What is the place of birth ? ABC',
  department: department,
  [Symbol.iterator]: function* () {
    yield this.name;
    yield this.role;
    yield this.salary;
    yield* this.department;
  }
}

const properties = [];
for (let prop of user) {
  properties.push(prop);
}

console.log(properties);
