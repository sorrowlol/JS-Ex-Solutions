

let repeatString = function(word, number) {
    
let string = '';

if (number < 0)
{
    return "ERROR";
}

else {
for (let i = 0; i < number; i++){
     {
        string += word;
    }
}
}

return string;
}

module.exports = repeatString
