async function start() {
    let [word, rhymes] = await getData();
    let shown = document.getElementById('word-shown');
    let rightContainer = document.querySelector('.right');
    
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
        shown.textContent = word; // User's guide word

        removeSpaces(arr);
        shuffle(arr);
        
        // Leaving a letter uncover'll be easier by separating each word
        let letters = arr.map(str => str.split(''));
        
        // Loading the hidden words; 5 words is the easiest level
        for (let i = 0; i < 5; i++) {
            let divOut = document.createElement('div');
            let divIn = document.createElement('div');
            
            letters[i].forEach(letter => {
                let span = document.createElement('span');
                span.textContent = letter;
                divIn.appendChild(span);
            });

            divOut.appendChild(divIn);
            rightContainer.appendChild(divOut);
        };
    };

    // This removes elements with more than one word, but it doesn't work very well
    function removeSpaces(arr) {
        let byWords = arr.map(str => str.split(' '));
        
        for (let i = 0; i < byWords.length; i++) {
            if (byWords[i].length > 1) {
                byWords.splice(i, 1);
            }
        }
        return byWords;
    };
    
    // Randomize the array with the Fisher-Yates Shuffle, so the words are not loaded in the same order everytime
    function shuffle(arr) {
        let current = arr.length,  random;
        
        while (current != 0) {
            random = Math.floor(Math.random() * current);
            current--;
      
            [arr[current], arr[random]] = [arr[random], arr[current]];
        }
        return arr;
    };
};

start();