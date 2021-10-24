// // TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// // TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "Project",
  },
  {
    type: "input",
    message: "Please enter a description of your application.",
    name: "Description",
  },
  {
    type: "input",
    message: "Please title your Table of Contents section:",
    name: "Table of Contents",
  },
  {
    type: "input",
    message:
      "How is this application installed; which dependencies do they need?",
    name: "Installation",
  },
  {
    type: "input",
    message: "What can this application be used for?",
    name: "Usage",
  },
  {
    type: "input",
    message: "Which license does this application use?",
    name: "License",
  },
  {
    type: "input",
    message:
      "Which users contributed to this project? Type N/A if this does not apply.",
    name: "Contributing",
  },
  {
    type: "input",
    message: "Which command is used to run this project?",
    name: "Tests",
  },
  {
    type: "input",
    message: "Where can users reach you if they have a question?",
    name: "Questions",
  },
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("Yay! It worked!");
    }
  });
}

// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data);
  });
}

// // Function call to initialize app
init();
