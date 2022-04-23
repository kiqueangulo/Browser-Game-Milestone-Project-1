// When the player just hit PLAY
async function randomData(level) {
    let response = await fetch('dataBase.json').then(obj => obj.json());
    let data = response.words[Math.floor(Math.random() * response.words.length)];

    let word = data.word;
    let wordInfo = [data.type, data.definition];
    let rhymes = data.levels[level - 1];
    
    return [word, wordInfo, rhymes];
};

// If the player chooses a specific word
async function specificData(level, par) {
    let word;
    let wordInfo = [];
    let rhymes = [];
    let response = await fetch('dataBase.json').then(obj => obj.json());

    for (let i = 0; i < response.words.length; i++) {
        if (response.words[i].word === par) {
            word = response.words[i].word;
            wordInfo = [response.words[i].type, response.words[i].definition];
            rhymes = response.words[i].levels[level - 1];
        };
    };

    return [word, wordInfo, rhymes];
};

// Loads the initial conditions to play
function loadData(str, strInfo, arr, elem) {
    elem.textContent = str.toUpperCase(); // User's guide word
    
    loadWordInfo(strInfo);
    
    loadHearts();

    shuffle(arr);
    
    // Leaving a letter uncover'll be easier by separating each word
    let letters = separate(arr);
    
    loadRhymes(arr, letters);
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

// Seperates any array of words by its letters
function separate(arr) {
    let letters = [];

    for (let i = 0; i < arr.length; i++) {
        arr[i].word.toUpperCase();
        letters.push(arr[i].word.split(''));
    };

    return letters;
};