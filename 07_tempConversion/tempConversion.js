const ftoc = function (celc) {
    if (typeof celc === 'number') {
        return Math.round((celc - 32) * (5 / 9) * 10) / 10;
    } else {
        return 'ERROR';
    }
};

const ctof = function (fahr) {
    if (typeof fahr === 'number') {
        return Math.round((fahr * (9 / 5) + 32) * 10) / 10;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof,
};
