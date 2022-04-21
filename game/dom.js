// Loads the initial conditions to play
function loadData(str, arr, elem) {
    elem.textContent = str.toUpperCase(); // User's guide word

    shuffle(arr);
    
    // Leaving a letter uncover'll be easier by separating each word
    let letters = separate(arr);
    
    loadRhymes(arr, letters);
};

// This loads the rhymes letter by letter
function loadRhymes(Array, arr) {
    let hiddenSide = document.querySelector('.hidden-side');
    
    // Loading the hidden words
    for (let i = 0; i < Array.length; i++) {
        let divOut = document.createElement('div');
        divOut.setAttribute('class', 'rhyme-zone');
        
        let divIn = document.createElement('div');
        divIn.setAttribute('class', `rhyme-section ${Array[i].word} pop-up`);

        createPopUp(divIn);

        loadByLetters(Array, arr, i, divIn);

        divOut.appendChild(divIn);
        hiddenSide.appendChild(divOut);
    };
};

// Window for the information of the hidden rhymes
function createPopUp(elem) {
    let popWindow = document.createElement('span');
    popWindow.setAttribute('id', 'window');
    elem.appendChild(popWindow);
};

// Loads the rhymes leaving one letter uncover as a clue
function loadByLetters(Array, arr, index, elem) {
    let random = Math.floor(Math.random() * arr[index].length); // To leave one letter uncover randomly

    for (let j = 0; j < arr[index].length; j++) {
        let span = document.createElement('span');
        span.setAttribute('class', `${Array[index].word} letter${j + 1} hidden-letter`);
        span.textContent = arr[index][j].toUpperCase();
        span.style.boxShadow = '1px 0px 10px 1px hsl(0, 0%, 96%)';

        if (random === j) {
            span.style.backgroundColor = 'white';
            span.style.color = 'black';
        };

        elem.appendChild(span);
    };
};

// Change the background to uncover the word
function revealWord(word) {
    let letters = document.querySelectorAll(`.${word}`);
    letters.forEach(letter => {
        letter.style.backgroundColor = 'white';
        letter.style.color = 'black';
    });
};

// Delete current content to have an updated display
function removeContent() {
    let divOut = document.querySelectorAll('.rhyme-zone');
    
    divOut.forEach(container => {
        container.remove();
    });
};