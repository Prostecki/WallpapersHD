import wallpapers from "./catalog.js";

const main = document.querySelector('main');
const templateCatalog = document.getElementById('tmpl-catalog').innerHTML;
const templateCard = document.getElementById('tmpl-card').innerHTML;
const mainCatalog = document.getElementById('mainCatalog');
const randomCard = document.getElementById('randomCard');
const randomBg = document.getElementById('randomBg');
//How to open bar menu
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menuBar = document.getElementById('menuBar');
//view button to toggle class between grid and flex-direction column
const cards = document.querySelectorAll('.flex-box-group');
const pics = document.querySelectorAll('.flex-box-group .pic');
const view = document.getElementById('view');
const cssLink = document.getElementById('cssLink');

renderCatalog();
displayGridButton();

document.addEventListener('DOMContentLoaded', reloadPageWithBg);
openMenu.addEventListener('click', openTheMenu);
closeMenu.addEventListener('click', closeTheMenu);
mainCatalog.addEventListener('click', renderCatalog);
randomCard.addEventListener('click', displayRandomImage);
randomBg.addEventListener('click', setRandomBackground);
document.addEventListener('DOMContentLoaded', () =>{
    view.addEventListener('click', () => {
        let gridViewEnabledCss = true;
        //change a css file with delay and applying some style
        setTimeout(() => {
            //toggle the flag
            gridViewEnabledCss = !isGridViewEnabledCss();
            const newCSSFile = gridViewEnabledCss ? 'css/grid.css' : 'css/style.css'
            cssLink.href = newCSSFile;
        }, 2000)

        //after 2 sec, apply some style for loading div
        let loadingAnimation = document.getElementById('loadingAnimation');
        loadingAnimation.style.opacity = '0.8';
        loadingAnimation.style.transition = 'all 0.8s';
        console.log('div vidno');

        //delay with applying some style
        setTimeout(() => {
            loadingAnimation.style.opacity = '0';
            loadingAnimation.style.transition = 'all 0.8s';
        }, 2000);
    });
});
window.addEventListener('resize', displayGridButton);

//... Other events listeners
function displayGridButton() {
    if(window.innerWidth > 800) {
        console.log('testViewButton800')
        view.style.display = 'none';
    } else {
        view.style.display = 'block';
    }
}


function isGridViewEnabledCss() {
    return cssLink.href.includes('grid.css');
}

function clearPage() {
    //Replace a template for emptiness
    main.innerHTML = '';
};

function renderCatalog() {
    // Clear the page before rendering the catalog
    clearPage();

    const catalogHtml = wallpapers.map((wallpaper, index) => {

        const template = document.createElement('template');

        template.innerHTML = templateCatalog
            .replace('${img}', wallpaper.file)
            .replace('${id}', index + 1)
            .replace('${title}', wallpaper.name);

        const element = template.content.firstElementChild;

        element.addEventListener('click', () => {
            // Define function renderImage with index
            renderImage(index + 1); 
        });

        element.classList.add('fade-in');

        return element;
    });

    catalogHtml.forEach(element => {
        main.appendChild(element);
    });
};

function renderImage(id) {
    //Clear page before rendering the catalog
    clearPage();

    // Create an element from template
    const template = document.getElementById('tmpl-card');
    //Need to read how to use it generally
    const templateContent = document.importNode(template.content, true);
    const card = templateContent.querySelector('.singleCard');

    // Replace a data in template
    const largePic = card.querySelector('.largePic');
    const title = card.querySelector('.titleModal');
    const describe = card.querySelector('.describe');
    
    largePic.src = wallpapers[id - 1].file;
    title.textContent = wallpapers[id - 1].name;
    describe.textContent = wallpapers[id - 1].describe;
    
    // Didplay an created element on the page
    main.appendChild(card);
    
    const modalContainer = card.querySelector('.modal-container');
    const openButton = card.querySelector('.info');
    const closeButton = card.querySelector('.closeMe');
    
    openButton.addEventListener('click', () => {
        modalContainer.classList.add('show');
    });

    closeButton.addEventListener('click', () => {
        modalContainer.classList.remove('show');
        modalContainer.style.transition = '.5s';
    });

    largePic.style.opacity = 0;
    largePic.style.transform = 'scale(0)';
    title.style.opacity = 0;
    title.style.transform = 'translateY(30px)';

    const delay = 100;

    setTimeout(() => {
        // Show an image and panel with animation
        largePic.style.opacity = 1;
        largePic.style.transform = 'scale(1)';
        title.style.opacity = 1;
        title.style.transform = 'translateY(0)';
    }, delay);

};

function displayRandomImage() {
    // Clear the page
    clearPage();

    const randomIndex = Math.floor(Math.random() * wallpapers.length);
    const randomWallpaper = wallpapers[randomIndex];

    const card = document.createElement('div');
    card.innerHTML = templateCard
        .replace('${img}', randomWallpaper.file)
        .replace('${title}', randomWallpaper.name)
        .replace('${describe}', randomWallpaper.describe);

    //For appearing animation
    const largePic = card.querySelector('.largePic');
    largePic.classList.add('fade-in');

    const title = card.querySelector('.titleModal');
    const describe = card.querySelector('.describe');
    const infoButton = card.querySelector('.info');
    const closeButton = card.querySelector('.closeMe');
    const modalContainer = card.querySelector('.modal-container');

    largePic.src = randomWallpaper.file;
    title.textContent = randomWallpaper.name;
    describe.textContent = randomWallpaper.describe;

    infoButton.addEventListener('click', () => modalContainer.classList.add('show'));
    closeButton.addEventListener('click', () => modalContainer.classList.remove('show'));

    main.appendChild(card); 
};

function openTheMenu() {
    openMenu.style.left = '-50px';
    openMenu.style.transition = 'all 0.7s';
    menuBar.style.transition = 'all 0.7s';
    menuBar.style.left = '0px';
    console.log('test');
};

function closeTheMenu() {
    console.log('test');
    openMenu.style.left = '10px';
    openMenu.style.transition = 'all 1s';
    menuBar.style.left = '-800px';
};

function reloadPageWithBg(){

    console.log('DOMContentLoaded event fired');

    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 2); //delay with 100ms

    //Declare a container for operate with
    const backgroundBody = document.querySelector('body');

    // Generate a random index to select a wallpaper from the wallpapers array
    const randomIndex = Math.floor(Math.random() * wallpapers.length);

    //Declare a variable img with attributes of array
    const randomImg = wallpapers[randomIndex]['file'];

    //append attributes from array and change body style
    backgroundBody.style.backgroundImage = `url(${randomImg})`;

    backgroundBody.style.backgroundSize = 'cover';
};

function setRandomBackground() {

    const backgroundBody = document.querySelector('body');

    // Generate a random index to select a wallpaper from the wallpapers array
    const randomIndex = Math.floor(Math.random() * wallpapers.length);

    //Declare a variable img with attributes of array
    const randomImg = wallpapers[randomIndex]['file'];
    
    //Append attributes after addEventListener to body element
    backgroundBody.style.backgroundImage = `url(${randomImg})`;
    backgroundBody.style.backgroundRepeat = 'no-repeat';
    backgroundBody.style.backgroundAttachment = 'fixed';
    backgroundBody.style.transition = 'all 0.7s';

    //It's just test
    console.log('it works?');
};

function toggleView() {

    //check, if it's saved in localStorage and set up a default value 
    let gridViewEnabled = localStorage.getItem('gridViewEnabled') === 'true' || false;

    gridViewEnabled = !gridViewEnabled;

    // Save new value in localStorage
    localStorage.setItem('gridViewEnabled', gridViewEnabled);
    
    let main = document.querySelector('main');
    let cards = document.querySelectorAll('.flex-box-group');
    let pics = document.querySelectorAll('.flex-box-group .pic');
    
    main.classList.toggle('flex-box-main-grid', gridViewEnabled);
    main.classList.toggle('flex-box-main', !gridViewEnabled);

    console.log('work with groups');
    cards.forEach(card => {
        console.log('work with cards');
        card.classList.toggle('flex-box-group-grid', gridViewEnabled);
        card.classList.toggle('flex-box-group', !gridViewEnabled);
    });
        
    pics.forEach(pic => {
        console.log('work with pics');
        pic.classList.toggle('pic-grid', gridViewEnabled);
        pic.classList.toggle('pic', !gridViewEnabled);
    });
        
};

function loadPicture() {

}
