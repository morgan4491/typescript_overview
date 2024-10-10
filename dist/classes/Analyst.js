import Employee from "./Employee.js";
class Analyst extends Employee {
    certifications;
    constructor(firstName, lastName, salary, title, certifications) {
        super(firstName, lastName, salary, title); // We are passing the arguments in 'super' up to the parent class of Employee
        this.certifications = certifications;
    }
}
export default Analyst;
