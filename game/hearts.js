// Loads as many hearts as lives the user has
function loadHearts() {
    let lives = window.localStorage.getItem('lives');
    let container = document.getElementById('lives');
    
    if (lives % 2 === 0) {
        for (let i = 0; i < lives / 2; i++){
            let icon = document.createElement('i');
            icon.setAttribute('class', 'fa-solid fa-heart');
    
            container.appendChild(icon);
        };
    } else {
        let crackedicon = document.createElement('i');
        crackedicon.setAttribute('class', 'fa-solid fa-heart-crack')
        container.appendChild(crackedicon);

        for (let i = 0; i < (lives - 1) / 2; i++){
            let icon = document.createElement('i');
            icon.setAttribute('class', 'fa-solid fa-heart');
    
            container.appendChild(icon);
        };
    };
};

// Removes or cracks up the hearts with wrong inputs
function demageHearts(failures) {
    let heart = document.querySelector('#lives').childNodes[0];
    
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