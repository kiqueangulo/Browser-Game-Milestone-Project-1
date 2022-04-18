// When the player just hit PLAY
async function randomData() {
    let response = await fetch('dataBase.json').then(obj => obj.json());
    let data = response.words[Math.floor(Math.random() * response.words.length)];
    
    let word = data.word;
    let rhymes = data.level1;
    

    return [word, rhymes];
};

// If the player chooses a specific word
async function specificData(par) {
    let word;
    let rhymes = [];
    let response = await fetch('dataBase.json').then(obj => obj.json());

    for (let i = 0; i < response.words.length; i++) {
        if (response.words[i].word === par) {
            word = response.words[i].word;
            rhymes = response.words[i].level1;
        };
    };

    return [word, rhymes];
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