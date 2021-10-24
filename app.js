const readmeDataArgs = process.argv.slice(2, process.argv.length);
console.log(readmeDataArgs);

const generateReadme = (projectName, githubName) =>
  `Project: ${projectName}
Github: ${githubName}`;
console.log(generateReadme("Readme Generator", "gabriellenoelle"));
