//Function to convert ascii string to Hex

let asciiToHexadecimal = (asciiString) =>
  {
	let arr1 = [];
	for (let i = 0, l = asciiString.length; i < l; i ++) 
     {
		let hex = Number(asciiString.charCodeAt(i)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
   }

//Call function with string
//Example:
// console.log(asciiToHexadecimal('10000'));


module.exports = asciiToHexadecimal;