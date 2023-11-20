
export function toggleMenu(){
    if (menuBar.style.top === "-200px" || menuBar.style.top === '') {
        menuBar.style.top = '0px';

    } else {
        menuBar.style.top = '-200px';
    }
    console.log('menu toggled!');
}

export function menuBackground() {
    const menuHeader = document.querySelector('.nav-container');
    if (window.scrollY >= 10) {
        // menuHeader.style.backgroundColor = 'grey';
        menuHeader.style.transition = '0.5s';
    } else {
        menuHeader.style.backgroundColor = 'transparent';
    }
}