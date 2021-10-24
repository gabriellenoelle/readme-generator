const fs = require("fs");

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

fs.writeFile("README.md", generateReadme(project, github), (err) => {
  if (err) throw err;
  console.log(
    "Readme generation complete! Check out index.html to see the output!"
  );
});
