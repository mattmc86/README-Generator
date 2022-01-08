
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js')

const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Whats is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects name?',
    },
    {
        type: 'input', 
        name: 'description',
        message: 'Please write a short description of your project',
    },
    {
        type: 'list', 
        name: 'license',
        message: 'What is the license type?',
        choices: ['MIT','APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input', 
        name: 'install',
        message: 'What command should be run to install dependencies?', 
        default: 'npm i'
    },
    {
        type: 'input', 
        name: 'test',
        message: 'What command should be run to run tests', 
        default: 'npm run test'
    },
    {
        type: 'input', 
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input', 
        name: 'contributors',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

//TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile('README.md',`${data}\n`,(err)=>{
    err ? console.error(err) : console.log('submitted')
     })

}

// 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) =>{
        console.log('Generating README...');
        writeToFile('README.md',generateMarkdown({ ...inquirerResponses}));
    });
}

// Function call to initialize app
init();
