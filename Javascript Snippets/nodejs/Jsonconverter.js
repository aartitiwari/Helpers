const fs = require("fs");
const XLSX = require("xlsx");

class JsonConverter {
  constructor() {
    this.jsonData = {};
  }

  //xlsx
  generateJSONFile(data) {
    fs.writeFileSync("data.json", JSON.stringify(data));
    console.log("json file generated 👍️");
  }

  convertXlsx(path) {
    const file = XLSX.readFile(path);
    const sheetNames = file.SheetNames;

    sheetNames.forEach((sheet, i) => {
      const tempData = XLSX.utils.sheet_to_json(file.Sheets[sheetNames[i]]);
      tempData.shift();
      this.jsonData[sheet] = tempData;
    });

    console.log("json data created 👍️");
    this.generateJSONFile(this.jsonData);
    return this.jsonData;
  }

  // csv
  convertCsv(path) {
    const csvData = fs.readFileSync(path);

    let data = csvData.toString().split(/\r?\n/);

    const keys = data[0].split(",");

    data.shift();

    this.jsonData = [];

    data.forEach((el) => {
      let d = el.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      let x = {};
      d.forEach((value, i) => {
        x[keys[i]] = value;
      });
      this.jsonData.push(x);
    });

    console.log("json data created 👍️");
    this.generateJSONFile(this.jsonData);
    return this.jsonData;
  }
}

const converter = new JsonConverter();
converter.convertXlsx("./data.csv");
