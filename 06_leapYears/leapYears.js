const leapYears = function (year) {
    let givenYear = Number(year);
    if (typeof year === 'number') {
        if (givenYear % 4 == 0) {
            if (givenYear % 100 == 0 && givenYear % 400 != 0) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = leapYears;
