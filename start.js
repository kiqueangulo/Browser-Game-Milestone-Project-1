async function start() {
    let [word, rhymes] = await randomData();
    let shown = document.getElementById('word-shown');
    let hiddenSide = document.querySelector('.hidden-side');
    
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
        
        // Loading the hidden words; 5 words is the easiest level
        for (let i = 0; i < 5; i++) {
            let divOut = document.createElement('div');
            let divIn = document.createElement('div');
            
            for (let j = 0; j < letters[i].length; j++) {
                let span = document.createElement('span');
                span.textContent = letters[i][j].toUpperCase();
                divIn.appendChild(span);
            };

            divOut.appendChild(divIn);
            hiddenSide.appendChild(divOut);
        };
    };
};