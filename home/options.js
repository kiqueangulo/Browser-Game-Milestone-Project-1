// Only words to be shown to user
async function getWords() {
    let wordOptions = [];
    let response = await fetch('dataBase.json').then(obj => obj.json());

    response.words.forEach(elem => {
        wordOptions.push(elem.word);
    });
    
    return wordOptions;
};

// Add the words for the user to select
async function addOption() {
    let wordOptions = await getWords();
    let selection = document.getElementById('word-options');

    wordOptions.forEach(word => {
        let option = document.createElement('option');
        option.setAttribute('value', word);
        option.textContent = word.toUpperCase();
        selection.append(option);
    });
};