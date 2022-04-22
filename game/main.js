async function start() {
    let shown = document.getElementById('word-shown');
    let [word, rhymes] = [];

    // Checking if the user chose a word or just clicked play (random word)
    const queries = urlQueries();

    if (queries[1] === 'random') {
        [word, wordInfo, rhymes] = await randomData(queries[0]);
    } else {
        [word, wordInfo, rhymes] = await specificData(queries[0], queries[1]);
    };
    
    loadData(word, wordInfo, rhymes, shown);
};

// Check if user attemp matches the options
function checkRhyme() {
    let divIn = document.querySelectorAll('.rhyme-section');
    let queries = urlQueries();
    let [correct, lives] = [localStorage.getItem('correct'), localStorage.getItem('lives')];
    let count = correct;

    correct = ifCorrect(queries[2], correct, divIn);   // Will update if the attemp matches an option

    lives = ifWrong(count, correct, lives);   // If the attemp failed, count and correct will stay equal. Thus, lives will update

    if (lives === 0) {
        showWindow(lives);
    };
    if (correct === divIn.length) {
        showWindow(correct);
    };
};