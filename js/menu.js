export function openTheMenu() {
    openMenu.style.left = '-50px';
    openMenu.style.transition = 'all 0.7s';
    menuBar.style.transition = 'all 0.7s';
    menuBar.style.left = '0px';
    document.querySelector('.buttonBack').classList.add('visible');
    console.log('It opens!');
};

export function closeTheMenu() {
    openMenu.style.left = '10px';
    openMenu.style.transition = 'all 1s';
    menuBar.style.left = '-800px';
    document.querySelector('.buttonBack').classList.remove('visible');
    console.log('It closes!');
};