const transformedData = {};
const dates = new Set();

const transformDate = (date) => {
  const date2 = new Date(date);

  return `${date2.getFullYear()}-${date2.getMonth()}-${date2.getDate()}`;
};

const transformFileData = (item) => {
  const name = "Employee Name";
  const date = "Date";
  const hours = "Work Hours";

  if (!transformedData[item[name]]) {
    const userName = item[name];

    transformedData[userName] = {
      name: userName,
    };
  }

  const currentDate = transformDate(item[date]);
  const currentName = transformedData[item[name]];

  dates.add(currentDate);
  currentName[currentDate] = item[hours];
};

const addDateKey = () => {
  Object.keys(transformedData).forEach((key) => {
    dates.forEach((date) => {
      if (!transformedData[key][date]) {
        transformedData[key][date] = "0";
      }
    });
  });
};

module.exports = {
  transformedData,
  transformFileData,
  dates,
  addDateKey,
};
