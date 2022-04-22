async function start() {
    let shown = document.getElementById('word-shown');
    let [word, rhymes] = [];

    // Checking if the user chose a word or just clicked play (random word)
    const queries = urlQueries();

    if (queries[1] === 'random') {
        [word, rhymes] = await randomData(queries[0]);
    } else {
        [word, rhymes] = await specificData(queries[0], queries[1]);
    };

    loadData(word, rhymes, shown);
};

// Check if user attemp matches the options
function checkRhyme() {
    let divIn = document.querySelectorAll('.rhyme-section');
    let queries = urlQueries();
    let [correct, lives] = [localStorage.getItem('correct'), localStorage.getItem('lives')];
    let count = correct;

    for (let i = 0; i < divIn.length; i++) {
        if (queries[2].toLowerCase() === divIn[i].classList[1]) {
            revealWord(queries[2]);
            correct++;
            updateCorrect(correct);
        };
    };

    if (count == correct) {
        demagHearts(lives);
        lives--
        updateLives(lives);
    };
};