// // TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("utils");
const generateReadme = require(".utils/generateMarkdown");

// // TODO: Create an array of questions for user input
const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const generateReadme = (projectName, githubName) =>
  `
Project: ${projectName}
Github: ${githubName}
`;
console.log(project, github);
console.log(generateReadme(project, github));

fs.writeFile("README.md", generateReadme(project, github), (err) => {
  if (err) throw err;
  console.log(
    "Readme generation complete! Check out index.html to see the output!"
  );
});

// // TODO: Create a function to initialize app
function init() {}

// // Function call to initialize app
init();
