const reverseString = function(word) {
    
    let length = word.length;

    let result = "";

    for (let j = length - 1; j >= 0; j--) {
        result += word[j];
        
    }

    return result
};



// Do not edit below this line
module.exports = reverseString;
