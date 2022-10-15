const XLSX = require("xlsx");
const fs = require("fs");

class JsonConverter {
  constructor(path) {
    // this.filePath = path;
    this.jsonData = {};
  }

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
converter.convertXlsx("./data.xlsx");

