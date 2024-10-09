"use strict";
// const jd = {
//     name: 'JD',
//     age: 44
// };
// function Person(userName, userAge, address, phone) {  // Here we are using a function as a constructor
//     this.name = userName;
//     this.age = userAge;
//     this.address = address;
//     this.phone = phone;
// }
// Person.prototype.printBirthday = function () {
//     console.log(`${this.name} is ${this.age} years old`);
// }
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
        this.name = name;
        this.sound = sound;
    }
}
class Person {
    constructor(name, age, address, phone) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
    printBirthday() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
const jd = new Person('JD', 44, '555 Coding Dr', '7777777777'); // MUST use the 'new' constructor when using a constructor function
const bob = new Person('Bob', 99, '777 Old St', '8888888888');
bob.printBirthday();
// console.log(jd);
// console.log(bob);
