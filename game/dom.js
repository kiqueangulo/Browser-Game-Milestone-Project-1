// Type and definition of the guide word
function loadWordInfo(arr) {
    let defWindow = document.getElementById('window');
    defWindow.innerHTML = 
        `Definition: // <i>${arr[0]}</i> //<br>
        ${arr[1]}`;
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

        createPopUp(Array, i, divIn);

        loadByLetters(Array, arr, i, divIn);

        divOut.appendChild(divIn);
        hiddenSide.appendChild(divOut);
    };
};

// Window for the information of the hidden rhymes
function createPopUp(Array, index, elem) {
    let popWindow = document.createElement('span');
    popWindow.setAttribute('id', 'window');
    popWindow.innerHTML = 
        `Definition: // <i>${Array[index].type}</i> //<br>
        ${Array[index].definition}`;

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

// Removes or cracks up the hearts with wrong inputs
function demageHearts(failures) {
    const heart = document.querySelector('#lives').childNodes[0];
    
    if (failures % 2 === 0) {
        makeEmphasis(heart);
        heart.className = 'fa-solid fa-heart-crack';
    } else {
        heart.remove();
    };
};

// Animates when a heart cracks up
function makeEmphasis(elemto) {
    setTimeout(() => {
        elemto.style.fontSize = '2.5rem';
        elemto.style.transform = 'rotate(45deg)';
    }, 50);
    setTimeout(() => {
        elemto.style.fontSize = '2rem';
        elemto.style.transform = 'rotate(0deg)';
    }, 300);
};