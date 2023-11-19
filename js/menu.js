const menuHeader = document.querySelector('.nav-container');
export function toggleMenu(){
    if (menuBar.style.top === "-200px" || menuBar.style.top === '') {
        menuBar.style.top = '0px';
        menuBar.style.zInder = '2';
        menuHeader.style.cursorPointer = 'none'

    } else {
        menuBar.style.top = '-200px';
    }
    console.log('menu toggled!');
}

export function menuBackground() {
    if (window.scrollY >= 10) {
        menuHeader.style.backgroundColor = 'black';
        menuHeader.style.transition = '0.5s';
    } else {
        menuHeader.style.backgroundColor = 'transparent';
    }
}