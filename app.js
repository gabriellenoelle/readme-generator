const readmeDataArgs = process.argv.slice(2, process.argv.length);
const [project, github] = readmeDataArgs;
console.log(readmeDataArgs);

const generateReadme = (projectName, githubName) =>
  `
Project: ${projectName}
Github: ${githubName}
`;
console.log(project, github);
console.log(generateReadme(project, github));
