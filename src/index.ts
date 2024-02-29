export { };

// An element access expression should take an argument in TS

// EXAMPLE 1 - Using the constructor to initialize a property

class Employee {
  constructor(public tasks: string[] = []) {
    this.tasks = tasks;
  }
}

const emp = new Employee(['develop', 'test']);

console.log(emp.tasks); // 👉️ ['develop', 'test']
emp.tasks.push('ship');
console.log(emp.tasks); // 👉️ ['develop', 'test', 'ship']

// ---------------------------------------------------

// // EXAMPLE 2 - Separate type and property name with a colon

// class Developer {
//   language = 'TypeScript';
// }

// class Employee {
//   developers: Developer[] = [];
// }

// const emp = new Employee();

// emp.developers.push(new Developer());

// console.log(emp.developers); // 👉️ [Developer {language: 'TypeScript'}]
