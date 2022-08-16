const fibonacci = function (number) {
    if (Number(number) > 0) {
        let result = 1;
        let firstNumber = 1;
        let secondNumber = 1;
        for (let i = 1; i < Number(number) - 1; i++) {
            result = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = result;
        }
        return result;
    } else {
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;
