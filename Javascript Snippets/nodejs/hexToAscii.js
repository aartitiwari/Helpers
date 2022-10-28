//Function to convert Hexadecimal to ascii

function hexadecimalToAscii(hexString) {
  let hex = hexString.toString();
  let str = "";
  for (let i = 0; i < hex.length; i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return str;
}

//Call function with hexadecimal string
//Example:
// console.log(hexadecimalToAscii('3131'));

module.exports = hexadecimalToAscii;
