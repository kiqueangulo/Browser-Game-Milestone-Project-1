// when the user has no more lives
function showWindow(decider) {
    let deciderWindow;

    if (decider === 0) {
        deciderWindow = document.querySelector('.level-failed');
    } else {
        deciderWindow = document.querySelector('.level-completed');
    };
    
    makeBlur();
    deciderWindow.style.display = 'flex';
};

// Start over the same level
function tryAgain() {
    let deciderWindow = document.querySelector('.level-failed');

    deciderWindow.style.display = 'none';
    restartTracker();
    removeContent();
    removeBlur();
    start();
};

// Delete current content to have an updated display
function removeContent() {
    let divOut = document.querySelectorAll('.rhyme-zone');
    
    divOut.forEach(container => {
        container.remove();
    });
};

/* This two functions activate and deactivate the blur background respectively */
function makeBlur() {
    let background = document.querySelectorAll('.blur');

    background.forEach(section => {
        section.style.filter = 'blur(1rem)';
    });
};

function removeBlur() {
    let background = document.querySelectorAll('.blur');

    background.forEach(section => {
        section.style.filter = 'blur()';
    });
};