import Employee from "./Employee";

class Analyst extends Employee {
    certifications: String[];

    constructor(firstName: string, lastName: string, salary: number, title: string, certifications: String[]) {
        super(firstName, lastName, salary, title);             // We are passing the arguments in 'super' up to the parent class of Employee
        
        this.certifications = certifications;
    }
}

export default Analyst;