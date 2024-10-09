import inquirer from "inquirer";

class App {
    static async showMainMenu() {
        const menuChoiceObj = await inquirer.prompt({
            message: 'Please choose an option',
            name: 'choice',
            type: 'list',
            choices: ['Show Employees', 'Add Employee', 'Update Employee Salary', 'Exit']
        });

        switch(menuChoiceObj.choice) {
            case 'Show Employees':
                await App.showEmployees();
                this.showMainMenu();
                break;
            case 'Add Employee':
                await App.showAddEmployeeInterface();
                this.showMainMenu();
                break;
            case 'Update Employee Salary':
                await App.showUpdateSalaryInterface();
                this.showMainMenu();
                break;
            default:
                console.log('-----\nThanks for using the Employee Tracker!');
        }
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

export default App;