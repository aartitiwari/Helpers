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
}

const converter = new JsonConverter();
converter.convertXlsx("./data.xl");
