
export function toggleMenu(){
    if (menuBar.style.left === "-500px" || menuBar.style.left === '') {
        menuBar.style.left = '50px';
    } else {
        menuBar.style.left = '-500px';
    }
    console.log('menu toggled!');
};

export function menuBackground() {
    const menuHeader = document.querySelector('.nav-container');
    if (window.scrollY >= 10) {
        menuHeader.style.backgroundColor = 'grey';
        menuHeader.style.transition = '0.5s';
    } else {
        menuHeader.style.backgroundColor = 'transparent';
    }
};