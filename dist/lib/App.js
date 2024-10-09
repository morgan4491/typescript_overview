"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
class App {
    static showMainMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            const menuChoiceObj = yield inquirer_1.default.prompt({
                message: 'Please choose an option',
                name: 'choice',
                type: 'list',
                choices: ['Show Employees', 'Add Employee', 'Update Employee Salary', 'Exit']
            });
            switch (menuChoiceObj.choice) {
                case 'Show Employees':
                    yield App.showEmployees();
                    this.showMainMenu();
                    break;
                case 'Add Employee':
                    yield App.showAddEmployeeInterface();
                    this.showMainMenu();
                    break;
                case 'Update Employee Salary':
                    yield App.showUpdateSalaryInterface();
                    this.showMainMenu();
                    break;
                default:
                    console.log('-----\nThanks for using the Employee Tracker!');
            }
        });
    }
    static showEmployees() {
        console.log('Show Employees');
    }
    static showAddEmployeeInterface() {
        console.log('Employee Interface');
    }
    static showUpdateSalaryInterface() {
        console.log('Update Salary Interface');
    }
}
exports.default = App;
