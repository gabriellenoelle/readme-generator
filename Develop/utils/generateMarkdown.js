// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.Project}
  ## https://github.com/${data.Github}/${data.Project}

  # Description
  ${data.Description}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  # Installation
  These dependencies must be installed in order for the application to run properly: ${data.Installation}

  # Usage
  This application can be used for this very vital task: ${data.Usage}

  # License
  This application utilizes the following license: ${data.License}
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

  # Contributing
  These amazing full-stack engineers contributed to this project: ${data.Contributing}

  # Tests
  To test this app out, you must utilize: ${data.Tests}

  # Questions
  Have a question for the developers? Please contact them at ${data.Questions}!
  
`;
}

module.exports = generateMarkdown;
