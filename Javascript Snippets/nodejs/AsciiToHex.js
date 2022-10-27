//Function to convert ascii string to Hex

let asciiToHexadecimal = (hexString) =>
  {
	let arr1 = [];
	for (let i = 0, l = hexString.length; i < l; i ++) 
     {
		let hex = Number(hexString.charCodeAt(i)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
   }

//Call function with string
//Example:
// console.log(asciiToHexadecimal('10000'));

module.exports = asciiToHexadecimal;
