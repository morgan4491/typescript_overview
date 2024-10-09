"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class Analyst extends Employee_1.default {
    constructor(firstName, lastName, salary, title, certifications) {
        super(firstName, lastName, salary, title); // We are passing the arguments in 'super' up to the parent class of Employee
        this.certifications = certifications;
    }
}
exports.default = Analyst;
