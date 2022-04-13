// This will return a ramdon word
async function getWord() {
    let response = await fetch(`https://random-word-api.herokuapp.com/word`).then(arr => arr.json());
    // return response
    console.log(response[0]);
};

getWord();