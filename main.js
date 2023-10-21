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

//Flag indicating whether the function is allowed to be used
let viewEnabled = true;
let gridViewEnabled = false;

renderCatalog();

document.addEventListener('DOMContentLoaded', reloadPageWithBg);
openMenu.addEventListener('click', openTheMenu);
closeMenu.addEventListener('click', closeTheMenu);
mainCatalog.addEventListener('click', renderCatalog);
randomCard.addEventListener('click', displayRandomImage);
randomBg.addEventListener('click', setRandomBackground);
view.addEventListener('click', toggleView);

//... Other events listeners

//Function of clear page
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
        return element;
    });

    catalogHtml.forEach(element => {
        main.appendChild(element);
        // console.log('testCard')
    });
};

function renderImage(id) {

    console.log('testCard');

    //clear page before rendering the catalog
    clearPage();

    //Replace a data in template and rendering
    main.innerHTML += templateCard.replace('${img}', wallpapers[id - 1].file)
                                  .replace('${img}', wallpapers[id - 1].file)
                                  .replace('${title}', wallpapers[id - 1].name)
                                  .replace('${describe}', wallpapers[id - 1].describe);
                                  
    const modalContainer = document.getElementById('modal_container');
    const moreInfoButton = document.getElementById('open');

    moreInfoButton.addEventListener('click', () => {
        modalContainer.classList.add('show')
    });

    const closeButton = document.getElementById('close');

    closeButton.addEventListener('click', () => {
        modalContainer.classList.remove('show');
    });

};

function displayRandomImage() {
    //Generate a random index to select a wallpaper from the wallpapers array
    const randomIndex = Math.floor(Math.random() * wallpapers.length);

    // Clear the page
    clearPage();

    // Replace data in the template and render with random data
    main.innerHTML += templateCard
        .replace('${img}', wallpapers[randomIndex].file)
        .replace('${title}', wallpapers[randomIndex].name)
        .replace('${describe}', wallpapers[randomIndex].describe);
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
    menuBar.style.left = '-600px';
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

    console.log(viewEnabled);

    if (viewEnabled) {

        gridViewEnabled = !gridViewEnabled;
        
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
    }
};
