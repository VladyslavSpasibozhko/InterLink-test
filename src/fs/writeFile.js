const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const { transformedData, dates } = require("../helpers/transform");

const createWriter = (path) => {
  const createHeaders = () => {
    const initialHeader = [{ id: "name", title: "Name/Date" }];

    dates.forEach((date) => {
      initialHeader.push({
        id: date,
        title: date,
      });
    });

    return initialHeader;
  };

  return createCsvWriter({
    path,
    header: createHeaders(),
  });
};

const writeCSVFile = (path) => {
  const csvWriter = createWriter(path);

  const data = Object.values(transformedData);

  csvWriter.writeRecords(data).catch((err) => console.log("Write error", err));
};

module.exports = writeCSVFile;
