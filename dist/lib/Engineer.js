"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class Engineer extends Employee_1.default {
    constructor(firstName, lastName, salary, title, programmingLanguages) {
        super(firstName, lastName, salary, title); // We are passing the arguments in 'super' up to the parent class of Employee
        this.programmingLanguages = programmingLanguages;
    }
}
exports.default = Engineer;
