const path = require("path");
const readCSVFile = require("./src/fs/readFile");
const writeCSVFile = require("./src/fs/writeFile");
const { addDateKey } = require("./src/helpers/transform");

const filePath = path.resolve(__dirname, "src", "acme_worksheet.csv");
const outputFilePath = path.resolve(__dirname, "output", "result.csv");

const createFile = async () => {
  try {
    await readCSVFile(filePath);
    await addDateKey();
    await writeCSVFile(outputFilePath);
  } catch (e) {
    console.log(e);
  }
};

createFile();
