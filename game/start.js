async function start() {
    const shown = document.getElementById('word-shown');
    let [word, rhymes] = [];

    // Checking if the user chose a word or just clicked play (random word)
    const param = new URLSearchParams(window.location.search);
    const decider = param.get('word');

    if (decider === 'random') {
        [word, rhymes] = await randomData();
    } else {
        [word, rhymes] = await specificData(decider);
    };

    loadData(rhymes);
    
    function loadData(arr) {
        shown.textContent = word.toUpperCase(); // User's guide word

        shuffle(arr);
        
        // Leaving a letter uncover'll be easier by separating each word
        let letters = [];
        for (let i = 0; i < rhymes.length; i++) {
            rhymes[i].word.toUpperCase();
            letters.push(rhymes[i].word.split(''));
        };
        
        loadRhymes(letters);
    };
};