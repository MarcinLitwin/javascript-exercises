const getTheTitles = function (array) {
    const titles = [];
    let ammountOfObjects = array.length;
    for (i = 0; i < ammountOfObjects; i++) {
        let currentObject = array[i];
        titles.push(currentObject.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
