async function start() {
    let [word, rhymes] = await randomData();
    let shown = document.getElementById('word-shown');
    
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