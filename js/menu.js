export function openTheMenu() {
    menuBar.style.top = '0px';
    console.log('It opens!');
};

export function closeTheMenu() {
    menuBar.style.top = '-500px';
    openMenu.style.transition = 'all 1s';
    console.log('It closes!');
};

export function toggleMenu(){
    if (menuBar.style.top === "0px" || menuBar.style.top === '') {
        menuBar.style.top = '-500px';
    } else {
        menuBar.style.top = '0px';
    }
    console.log('menu toggled!');
}