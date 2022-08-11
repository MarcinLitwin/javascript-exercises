const sumAll = function (num1, num2) {
    let sum = 0;
    let Number1 = Number(num1);

    let Number2 = Number(num2);
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        if (Number1 < 0 || Number2 < 0) {
            return 'ERROR';
        } else if (Number1 < Number2)
            for (i = Number1; i <= Number2; i++) {
                sum = sum + i;
            }
        else if (Number1 > Number2) {
            for (i = Number2; i <= Number1; i++) {
                sum = sum + i;
            }
        }
        return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
