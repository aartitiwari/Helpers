const XLSX = require("xlsx");
const fs = require("fs");

class JsonConverter {
  constructor(path) {
    this.filePath = path;
  }

  generateJSONFile(data) {
    fs.writeFileSync("data.json", JSON.stringify(data));
  }

  convertXlsx() {
    const file = XLSX.readFile(this.filePath);
    const sheetNames = file.SheetNames;

    let parsedData = {};

    sheetNames.forEach((sheet, i) => {
      const tempData = XLSX.utils.sheet_to_json(file.Sheets[sheetNames[i]]);
      tempData.shift();
      parsedData[sheet] = tempData;
    });

    this.generateJSONFile(parsedData);
    console.log("json file generated 👍️");
  }
}

const converter = new JsonConverter("./data.xlsx");
const jsonData = converter.convertXlsx();
