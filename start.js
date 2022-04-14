async function start() {
    let [word, rhymes] = await getData();
    let shown = document.getElementById('word-shown');
    
    shown.textContent = word; // User's guide word
};

start();