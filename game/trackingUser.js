// Gets the url queries in an array [level, guide word, user attemp]
function urlQueries() {
    let queries = [];
    let attemp = document.getElementById('typed-input');
    const link = new URLSearchParams(window.location.search);
    
    link.append('attemp', attemp.value);

    link.forEach(query => {
        queries.push(query);
    });

    return queries;
};

// If the user input matches any rhyme option
function ifCorrect(word, counter, elementArray) {
    for (let i = 0; i < elementArray.length; i++) {
        if (word.toLowerCase() === elementArray[i].classList[1]) {
            revealWord(word);
            counter++;
            updateCorrect(counter);
        };
    };

    return counter;
};

// If the user makes an incorrect input
function ifWrong(param, comparer, counter) {
    if (param === comparer) {
        demageHearts(counter);
        counter--;
        updateLives(counter);
    };

    return counter;
};

/* These two functions keep track of fails and successful attemps */
function updateCorrect(correct) {
    window.localStorage.setItem('correct', correct);
};

function updateLives(lives) {
    window.localStorage.setItem('lives', lives);
};