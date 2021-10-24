const readmeDataArgs = process.argv.slice(2, process.argv.length);
console.log(readmeDataArgs);

const printReadmeData = (readmeDataArr) => {
  for (let i = 0; i < readmeDataArr.length; i += 1) {
    console.log(readmeDataArr[i]);
  }

  console.log("==============");
  // Performs identically to function above
  readmeDataArr.forEach((readmeItem) => {
    console.log(readmeItem);
  });
};

printReadmeData(readmeDataArgs);
