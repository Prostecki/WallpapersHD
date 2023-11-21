export function toggleMenu(){
    if (menuBar.style.left === "-620px" || menuBar.style.left === '') {
        menuBar.style.left = '40px';
    } else {
        menuBar.style.left = '-620px';
    }
    console.log('menu toggled!');

    if (window.innerWidth = 800) {

    }
};

export function menuBackgroundScroll() {
    const menuHeader = document.querySelector('.nav-container');
    if (window.scrollY >= 10) {
        menuHeader.style.backgroundColor = 'grey';
        menuHeader.style.transition = '0.5s';
    } else {
        menuHeader.style.backgroundColor = 'transparent';
    }
};