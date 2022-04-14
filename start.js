async function start() {
    let [word, rhymes] = await getData();
    let shown = document.getElementById('word-shown');
    let rightContainer = document.querySelector('.right');
    
    shown.textContent = word; // User's guide word
    
    // Loading the hidden words; 5 words is the easiest level
    for (let i = 0; i < 5; i++) {
        let letters = rhymes.all[i].split(''); // Leaving a letter uncover'll be easier by separating each word
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

start();