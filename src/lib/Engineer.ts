import Employee from "./Employee";

class Engineer extends Employee {       // The use of 'extends' allows the class of Engineer to inherit all of the properties from Employee (now referred to as the parent or 'super') - This is also known as 'Class Inheritance'

    programmingLanguages: String[];

    constructor(firstName: string, lastName: string, salary: number, title: string, programmingLanguages: String[]) {
        super(firstName, lastName, salary, title);             // We are passing the arguments in 'super' up to the parent class of Employee
        
        this.programmingLanguages = programmingLanguages;
    }
}

export default Engineer;