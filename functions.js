// In case the selected word is also in the array of rhymes
function deleteSameWord(word, wordsArr) {
    for (i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i] === word) {
            wordsArr.splice(i, 1);
        };
    };
    
    return wordsArr;
};

// This removes elements with more than one word, but it doesn't work very well
function removeSpaces(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].split(' ').length > 1) {
            arr.splice(i, 1);
        };
    };

    return arr;
};

// Randomize the array with the Fisher-Yates Shuffle, so the words are not loaded in the same order everytime
function shuffle(arr) {
    let current = arr.length;
    let random;
    
    while (current != 0) {
        random = Math.floor(Math.random() * current);
        current--;
    
        [arr[current], arr[random]] = [arr[random], arr[current]];
    };

    return arr;
};