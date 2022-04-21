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

/* These two functions keep track of fails and successful attemps */
function updateCorrect(correct) {
    window.localStorage.setItem('correct', correct);
};

function updateLives(lives) {
    window.localStorage.setItem('lives', lives);
};