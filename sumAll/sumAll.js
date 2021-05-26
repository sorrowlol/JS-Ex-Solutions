const sumAll = function(x, y) {
x = -10;
y = 4;
let count = 0;

if (typeof(x) === 'number' && typeof(y) === 'number'){ 
	if (x >= 0 && y >=0){	
		if (x < y){ 
			for (let i = x; x <= y; x++){
				count += x;
				}
			  }
		if (x > y){
			for (let i = y; y <= x; y++){
				count += y;
			      	 } 
			}
		return count;
	}
	return 'ERROR';
}
else {
	return 'ERROR';
}
}

module.exports = sumAll
