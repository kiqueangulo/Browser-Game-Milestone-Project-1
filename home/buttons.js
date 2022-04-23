// Pops up a window for the user to choose a word
async function showForm() {
    let form = document.querySelector('.word-selection');
    
    form.style.display = 'initial';
    await addOption();
};

// To close the pop-up window. It's not working properly
function closeWindow() {
    let form = document.querySelector('.word-selection');
    form.style.display = 'none';
};

// To mute/play the music. Ask for the async functions issue
function toggleMusic() {
    let audio = document.getElementsByTagName('audio');
    let speaker = document.querySelector('.icon');

    if (!audio.muted) {
        audio.muted = true;
        speaker.className = 'fa fa-volume-slash icon';
        // audio.pause(); --They don't work
    } else {
        audio.muted = false;
        speaker.className = 'fa fa-volume icon';
        // audio.play();
    };
};