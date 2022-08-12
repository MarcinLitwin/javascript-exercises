const palindromes = function (word) {
    let placesOfPunctation = getPunctationPlaces(word);
    return (
        placesOfPunctation +
        word +
        getSentenceWithoutPunctation(word, placesOfPunctation)
    );
};

//Function to delete punctation from given word based on given punctation places array

function getSentenceWithoutPunctation(word, arrayOfPunctation) {
    let wordLength = word.length;
    // creating array from our sentence/word
    const wordArray = [];
    for (i = 0; i < wordLength; i++) {
        wordArray.push(word.charAt(i));
    }
    // wordArray is our array with letters from sentence
    // now we need to delete from this array punctation from places we get from arrayOfPunctation

    for (n = 0; n < arrayOfPunctation.length; n++) {
        let placeToDelete = arrayOfPunctation[n];
        wordArray.splice(placeToDelete, 1);
    }
    return wordArray;
}

// function to get punctation places in array NOT  WORKING
//problem with this function couses problems

function getPunctationPlaces(sentence) {
    const wordArray = [];
    for (i = 0; i < sentence.length; i++) {
        wordArray.push(sentence.charAt(i));
    }
    let length = wordArray.length;
    const punctuationArray = [];
    for (i = 0; i < length; i++) {
        let char = wordArray[i];
        let charLow = char.toLowerCase();
        let charUp = char.toUpperCase();
        if (charLow == charUp) {
            punctuationArray.push(i);
        } else {
            continue;
        }
    }
    return punctuationArray;
}

// function that compares word, takes word, makes copy of it backward and compares it
function compareWordBackwardAndNormal(word) {
    let length = word.length;
    let arrayLetters = [];
    for (i = 0; i < length; i++) {
        arrayLetters.push(word.charAt(i));
    }
    let arrayLettersBackward = arrayLetters.reverse().join('');
    if (word == arrayLettersBackward) {
        return true;
    } else {
        return false;
    }
}
// Do not edit below this line
module.exports = palindromes;
