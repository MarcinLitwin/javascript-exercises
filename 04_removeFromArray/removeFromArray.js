const removeFromArray = function (array, ...args) {
    let numbers = Array.from(args);
    let ourArray = array;

    for (i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        for (n = 0; n < ourArray.length; n++) {
            if (number === ourArray[n]) {
                ourArray.splice(n, 1);
            }
        }
    }
    return ourArray;
};

// Do not edit below this line
module.exports = removeFromArray;
