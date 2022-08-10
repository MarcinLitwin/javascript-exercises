const repeatString = function (string, times) {
    let outcomeString = [];
    let ourString;
    if (times > 0) {
        for (let i = 0; i < times; i++) {
            outcomeString.push(string);
            ourString = outcomeString.join('');
        }

        return ourString;
    } else if (times == 0) {
        return '';
    } else if (times < 0) {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
