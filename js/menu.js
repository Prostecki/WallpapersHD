
export function toggleMenu(){
    if (menuBar.style.top === "-200px" || menuBar.style.top === '') {
        menuBar.style.top = '0px';
    } else {
        menuBar.style.top = '-200px';
    }
    console.log('menu toggled!');
}