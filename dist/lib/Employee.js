"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(firstName, lastName, salary, title) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.title = title;
    }
    printFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
    updateSalary(newSalary) {
        this.salary = newSalary;
    }
    getSalary() {
        return this.salary;
    }
}
exports.default = Employee;
