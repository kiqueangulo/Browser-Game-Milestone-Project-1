// This will return a ramdon word
async function getWord() {
    let response = await fetch(`https://random-word-api.herokuapp.com/word`).then(arr => arr.json());
    return response
};

// This will return an array of rhymes from a given word
async function getRhymes(word) {
    let response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/rhymes`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
            'X-RapidAPI-Key': '56061a3ad2mshd3bab4d346d11cfp150325jsn2c8650949247'
        }
    }).then(obj => obj.json());

    return response.rhymes;
};

async function getData() {
    let word = await getWord();
    let rhymes = await getRhymes(word);
    
    // Ignore words with no rhymes in the api
    while (Object.keys(rhymes).length === 0) {
        word = await getWord();
        rhymes = await getRhymes(word);
    };

    return [word, rhymes];
};