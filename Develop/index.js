// // TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// // TODO: Create an array of questions for user input
const questions = [{
  type: "input",
  message: "What is the title of your project?",
  name: "Project Title"
}, {
  type: "input",
  message: "Please enter a description of your application.",
  name: "Description"
}, {
  type:
  message:
  name:
}, {
  type:
  message:
  name:
}, {
  type:
  message:
  name:
}, {
  type:
  message:
  name:
}, {
  type:
  message:
  name:
},
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeToFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("Yay! It worked!");
    }
  });
}

fs.writeFile("README.md", generateMarkdown(project, github), (err) => {
  if (err) throw err;
  console.log(
    "Readme generation complete! Check out index.html to see the output!"
  );
});

// // TODO: Create a function to initialize app
function init() {}

// // Function call to initialize app
init();
