const fibonacci = function(input) {

    let position = Number(input);

    let number1 = 1;
    let number2 = 1;
    let aux = 0;

    for (let i = 0; i < position - 2; i++) {
        aux = number2;
        number2 = number1 + number2;
        number1 = aux;
    }

    if (position == 1 || position == 2) {
        return 1;
    }

    else if (position == 0 || position == "0") {
        return 0;
    }

    else if (position < 0) {
        return "OOPS";
    }

    else {
        return number2;
    }
};

// Do not edit below this line
module.exports = fibonacci;
