// complete this js code
function Person(name, age) {
	this.name = name;
  this.age = age;
}
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
  this.jobTitle = jobTitle;
}
Employee.prototype = Object.create(Person.prototype);

// Set the correct constructor for Employee
Employee.prototype.constructor = Employee;

// Adding the jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};
const person = new Person("Alice", 25);
person.greet(); // Output: Hello, my name is John, I am 30 years old.

const employee = new Employee("Bob", 30, "Manager");
employee.greet(); // Output: Hello, my name is Alice, I am 25 years old.
employee.jobGreet();
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
