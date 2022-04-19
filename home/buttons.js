async function showForm() {
    let form = document.querySelector('.word-selection');
    let closeBttn = document.querySelector('close-bttn');

    form.style.display = 'initial';
    
    closeBttn.addEventListener('click', () => {
        form.style.display = 'none';
    });
    
    await addOption();
};