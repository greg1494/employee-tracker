# Employee Tracker
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

  ## Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Testing](#testing)
  * [License](#license)
  * [Questions / Contact for Details](#questions)

  <a name='description'></a>
  ## Description
  GIVEN a command-line application that accepts user input
  
  WHEN I start the application
  
  THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee   role
  
  WHEN I choose to view all departments
  
  THEN I am presented with a formatted table showing department names and department ids
  
  WHEN I choose to view all roles
  
  THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
  
  WHEN I choose to view all employees
  
  THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the       employees report to
  
  WHEN I choose to add a department
  
  THEN I am prompted to enter the name of the department and that department is added to the database
  
  WHEN I choose to add a role
  
  THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
  
  WHEN I choose to add an employee
  
  THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
  
  WHEN I choose to update an employee role
  
  THEN I am prompted to select an employee to update and their new role and this information is updated in the database

  <a name='usefaq'></a>
  ## Usage
  The user should have an easy time using the application
  
  Here is a video description of how the application is used: https://watch.screencastify.com/v/hXAlFuH8eaVK9pjj9Atn

  <a name='install'></a>
  ## Installation
  Use the "npm install" in the terminal to begin the installation process
  
  Use "npm i mysql2" to install the dependency
  
  Use "npm i inquirer" to install the dependency
  
  Use "npm i console.table" to install the dependency

  <a name='test'></a>
  ## Testing
  To run the mysql server use "mysql -u root -p" to begin the server. It will then prompt you to enter your password. Directly in the app.js change the password for your own
  personal password. Once into the mysql server type Use company_db; after that source db/schema.sql and db/seeds.sql
  
  Use "node app" in the terminal to begin the testing process

  <a name='license'></a>
  ## License
  The application will be covered under a undefined license.


  <a name='questions'></a>
  ## Questions / Contact for Details
  This application can be found on my Github page: [greg1494](https://github.com/greg1494).

  If you have any questions contact me using either my Github, or by my email at [gregchristiansen14@gmail.com](gregchristiansen14@gmail.com).
  
