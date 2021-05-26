const removeFromArray = function(x) {
    let b = [1, 2, 3, 4];
	if (b.indexOf(x) == -1){
		return Error;
}
	else {
		b.splice(indexOf(x),1)
	} 

	return b;
}

module.exports = removeFromArray
