const reverseString = function (string) {
    let stringLength = string.length;
    let reversedString = [];
    for (let i = 0; i < stringLength + 1; i++) {
        reversedString.push(string.charAt(stringLength - i));
    }
    let stringFromOurArray = reversedString.join('');
    return stringFromOurArray;
};

// Do not edit below this line
module.exports = reverseString;
