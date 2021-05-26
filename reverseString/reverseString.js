
const reverseString = function(word) {
let string = '';

if (word === ''){
	return '';
	}
else {
	for (let i = word.length - 1; i >= 0; i--){
		string += word[i]; 
		}
	return string;

}
}
module.exports = reverseString
