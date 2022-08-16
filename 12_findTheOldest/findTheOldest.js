const findTheOldest = function (array) {
    let objectWithOldestPerson;
    let lifetime = 0;
    let length = array.length;
    let latestYear;

    for (let i = 0; i < length; i++) {
        let currentObject = array[i];
        let currentLifetime =
            currentObject.yearOfDeath - currentObject.yearOfBirth;
        if (currentObject.yearOfDeath == undefined) {
            currentLifetime = 2022 - currentObject.yearOfBirth;
        }
        if (currentLifetime > lifetime) {
            lifetime = currentLifetime;
            objectWithOldestPerson = currentObject;
        } else {
            continue;
        }
    }
    return objectWithOldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
