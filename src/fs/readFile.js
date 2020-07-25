const fs = require("fs");
const csv = require("csv-parser");
const { transformFileData } = require("../helpers/transform");

const readCSVFile = async (path) => {
  return new Promise((res, rej) => {
    fs.createReadStream(path)
      .pipe(csv())
      .on("data", (row) => res(transformFileData(row)))
      .on("error", (err) => rej(err));
  });
};

module.exports = readCSVFile;
