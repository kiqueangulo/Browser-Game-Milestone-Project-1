function trackUser() {
    window.localStorage.setItem('correct', 0);
    window.localStorage.setItem('lives', 10);
};

window.onbeforeunload = () => {
    trackUser();
};