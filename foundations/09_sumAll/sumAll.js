const sumAll = function(number1, number2) {

    if (Number.isInteger(number1) && Number.isInteger(number2) && number1 > 0 && number2 > 0) {

        let sum = 0;

        let difference = Math.abs(number1 - number2);

        let bigger = 0;
        let smaller = 0;

        if (number1 > number2) {
            bigger = number1;
            smaller = number2;
        }

        else {
            bigger = number2;
            smaller = number1;
        }

        sum = (bigger + smaller) * (bigger - smaller + 1) / 2;

        return sum;
    }

    else{
        return `ERROR`;
    }
};

// Do not edit below this line
module.exports = sumAll;
