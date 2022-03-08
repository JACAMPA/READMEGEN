// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [{
    name: "title",
    message: "Whats the name of your project?",
    type: "input"
}, 
{
    name: "description",
    message: "describe your project?",
    type: "input"
},
{
    name: "install",
    message: "Enter installation instructions.",
    type: "input"
},
{
    name: "usage",
    message: "Please enter usage information.",
    type: "input"
},
{
    name: "contribution",
    message: "Enter contribution guidelines.",
    type: "input"
},
{
    name: "test",
    message: "What commands should be run to test the application?",
    type: "input"
},
{
    name: "license",
    message: "What license would you use?",
    type: "list",
    choices: ["MIT", "BSD", "ISC","APACHE","NONE"]
},
{
    name: "github",
    message: "What is your GitHub username?",
    type: "input"
},
{
    name: "email",
    message: "What is your email address?",
    type: "input"
},
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("ReadMe.md", generateMarkdown(data), (err) => {
        
    if (err) {
        console.log(err);
    }
    console.log('Successful');
})

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=>{writeToFile(data)})
}

// Function call to initialize app
init();
