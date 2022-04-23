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

// If the user comlpletes a level and go to the next one
function nextLevel() {
    const link = new URLSearchParams(window.location.search);
    let level = Number(link.get('level'));
    link.set('level', `${level + 1}`);
    link.set('word', `${guideWord()}`);
    window.location.search = link.toString();
};

// When the user loses and wants to try again
function restartTracker() {
    window.localStorage.setItem('correct', 0);
    window.localStorage.setItem('lives', 10);
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

// Delete the count of attemps (correct) and fails (lives)
window.onbeforeunload = () => {
    window.localStorage.clear();
};