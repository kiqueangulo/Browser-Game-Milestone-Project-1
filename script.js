// This will return a ramdon word
async function getWord() {
    let response = await fetch(`https://random-word-api.herokuapp.com/word`).then(arr => arr.json());
    return response
};

// This will return an array of rhymes from a given word
async function getRhymes(word) {    
    let response = await fetch(`https://api.datamuse.com/words?rel_rhy=${word}`).then(obj => obj.json());
    return response;
};

async function rhymes() {
    let word = await getWord();
    let rhymes = await getRhymes(word);
    
    // Ignore words with no rhymes in the api
    while (Object.keys(rhymes).length === 0) {
        word = await getWord();
        rhymes = await getRhymes(word);
    };

    console.log(word);
    console.log(rhymes);
};

rhymes();