function loadRhymes(arr) {
    let hiddenSide = document.querySelector('.hidden-side');
    
    // Loading the hidden words; 5 words is the easiest level
    for (let i = 0; i < 5; i++) {
        let divOut = document.createElement('div');
        divOut.setAttribute('class', 'rhyme-zone');

        let divIn = document.createElement('div');
        divIn.setAttribute('class', 'rhyme-section');
        
        for (let j = 0; j < arr[i].length; j++) {
            let span = document.createElement('span');
            span.textContent = arr[i][j].toUpperCase();
            span.setAttribute('class', `rhyme-letter${j + 1}`);

            divIn.appendChild(span);
        };

        divOut.appendChild(divIn);
        hiddenSide.appendChild(divOut);
    };
};