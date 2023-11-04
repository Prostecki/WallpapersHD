export function openTheMenu() {
    openMenu.style.left = '-50px';
    openMenu.style.transition = 'all 0.7s';
    menuBar.style.transition = 'all 0.7s';
    menuBar.style.left = '0px';
    console.log('It opens!');

    // document.addEventListener('click', closeTheMenuOnClick);
};

export function closeTheMenu() {
    console.log('It closes!');
    openMenu.style.left = '10px';
    openMenu.style.transition = 'all 1s';
    menuBar.style.left = '-800px';
};