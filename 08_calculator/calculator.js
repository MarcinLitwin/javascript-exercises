const add = function () {
    let numbers = Array.from(arguments);
    let result = 0;
    for (i = 0; i < numbers.length; i++) {
        result += Number(numbers[i]);
    }
    return result;
};

const subtract = function () {
    let numbers = Array.from(arguments);
    let result = 0;
    for (i = 0; i < numbers.length; i++) {
        result = Number(numbers[0]) - Number(numbers[i]);
    }
    return result;
};

const sum = function (...args) {
    let numbers = Array.from(...args);
    let summary = 0;
    for (i = 0; i < numbers.length; i++) {
        summary += numbers[i];
    }
    return summary;
};

const multiply = function (...args) {
    let numbers = Array.from(...args);
    let result = 1;
    for (i = 0; i < numbers.length; i++) {
        result = result * numbers[i];
    }
    return result;
};

const power = function (num1, num2) {
    let result = Math.pow(num1, num2);
    return result;
};

const factorial = function (numberToFact) {
    let result = 1;
    for (i = 1; i < numberToFact + 1; i++) {
        result = result * i;
    }
    return result;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
