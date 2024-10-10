import Employee from "./Employee.js";
class Engineer extends Employee {
    programmingLanguages;
    constructor(firstName, lastName, salary, title, programmingLanguages) {
        super(firstName, lastName, salary, title); // We are passing the arguments in 'super' up to the parent class of Employee
        this.programmingLanguages = programmingLanguages;
    }
}
export default Engineer;
