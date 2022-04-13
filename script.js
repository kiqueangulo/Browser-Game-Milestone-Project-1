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
    
    return response;
    // console.log(response);
};

async function rhymes() {
    let rhymes = await getRhymes(await getWord());
    console.log(rhymes);
};

rhymes();