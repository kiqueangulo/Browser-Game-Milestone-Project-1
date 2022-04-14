async function start() {
    let [word, rhymes] = await getData();
    let shown = document.getElementById('word-shown');
    let rightContainer = document.querySelector('.right');
    
    shown.textContent = word; // User's guide word

    /* There are words that are spelled the same but pronounced differently depending on the role they play in a sentence.
        If we get one of those, rhymes has three key-value pairs (all, noun, verb) */
    if (Object.keys(rhymes).length > 1) {
        if (Math.random() < 0.5) {
            loadData(rhymes.noun);
        } else {
            loadData(rhymes.verb);
        };
    } else {
        loadData(rhymes.all);
    };
    
    function loadData(arr) {
        // Loading the hidden words; 5 words is the easiest level
        for (let i = 0; i < 5; i++) {
            let letters = arr[i].split(''); // Leaving a letter uncover'll be easier by separating each word
            let divOut = document.createElement('div');
            let divIn = document.createElement('div');

            letters.forEach(letter => {
                let span = document.createElement('span');
                span.textContent = letter;
                divIn.appendChild(span);
            });

            divOut.appendChild(divIn);
            rightContainer.appendChild(divOut);
        };
    };
};

start();
