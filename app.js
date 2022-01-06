const inquirer = require('inquirer');

// Display the main menu
function promptMainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'selectMain',
                message: 'Select an option.',
                choices: [
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    'View Employees by Manager',
                    'View Employees by Department',
                    'View Total Utilized Budget per Department',
                    'Add a Department',
                    'Add a Role',
                    'Add an Employee',
                    'Update Employee Role',
                    'Update Employee Manager',
                    'Delete a Department',
                    'Delete a Role',
                    'Delete an Employee',
                ],
            },
        ])
        .then(async ({ selectMain }) => {
            // fetch all the current departments
            const departments = await get.departments();

            switch (selectMain) {
                case 'View All Departments':
                    print.departments();
                    promptMainMenu();
                    break;
                case 'View All Roles':
                    print.roles();
                    promptMainMenu();
                    break;
                case 'View All Employees':
                    print.employees();
                    promptMainMenu();
                    break;
                case 'View Employees by Manager':
                    const managers = await get.managers();
                    promptManagerMenu(managers);
                    break;
                case 'View Employees by Department':
                    promptDepartmentMenu(departments);
                    break;
                case 'View Total Utilized Budget per Department':
                    print.totalUtilizedBudget();
                    promptMainMenu();
                    break;
                case 'Add a Department':
                    promptNewDepartment();
                    break;
                case 'Add a Role':
                    promptNewRole(departments);
                    break;
                case 'Add an Employee':
                    promptNewEmployee(departments);
                    break;
                case 'Update Employee Role':
                    promptAlterRole(departments);
                    break;
                case 'Update Employee Manager':
                    promptAlterManager(departments);
                    break;
                case 'Delete a Department':
                    promptDeleteDepartment(departments);
                    break;
                case 'Delete a Role':
                    promptDeleteRole(departments);
                    break;
                case 'Delete an Employee':
                    promptDeleteEmployee(departments);
                    break;
            }
        });
}