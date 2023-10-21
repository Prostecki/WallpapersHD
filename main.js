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

renderCatalog();

mainCatalog.addEventListener('click', renderCatalog);
randomCard.addEventListener('click', displayRandomImage);
document.addEventListener('DOMContentLoaded', reloadPageWithBg);
randomBg.addEventListener('click', setRandomBackground);
templateCard.addEventListener('click', renderImage);
//other events listeners

//Function of clear page
function clearPage() {
    //Replace a template for emptiness
    main.innerHTML = '';
}

function renderCatalog() {

    //clear page before rendering the catalog
    clearPage();

    const catalogHtml = wallpapers.map((wallpaper, index) => {
        return templateCatalog
            .replace('${img}', wallpaper.file)
            .replace('${id}', index + 1)
            .replace('${title}', wallpaper.name);
    });

    main.innerHTML = catalogHtml.join('');
}

function displayModal(image, title, describe) {
    // Referring to a modal window in the DOM
    const modalContainer = document.getElementById('modal_container');
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const linkDl = document.getElementById('download');

    // Set an attribute href and specify which image to download
    linkDl.setAttribute('href', image);

    // Set event listeners for the modal window
    open.addEventListener('click', () => {
        modalContainer.classList.add('show');
    });

    close.addEventListener('click', () => {
        modalContainer.classList.remove('show');
    });

    window.addEventListener('click', (event) => {
        if (event.target == modalContainer) {
            modalContainer.classList.remove('show');
        }
    });

    // Populate the modal window with the image, title, and description
    // You can use the same template you're using in other places
    const modalContent = templateCard
        .replace('${img}', image)
        .replace('${title}', title)
        .replace('${describe}', describe);

    // Add the modal content to the modal container
    modalContainer.innerHTML = modalContent;
}

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

    //Referring to a modal window in the DOM
    const modalContainer = document.getElementById('modal_container');

    // Referring to buttons and link in the DOM
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const linkDl = document.getElementById('download');

    // Set an attribute href and specify which image to download
    linkDl.setAttribute('href', wallpapers[randomIndex].file);

    // Set event listeners for modal window
    open.addEventListener('click', () => {
        modalContainer.classList.add('show');
    });

    close.addEventListener('click', () => {
        modalContainer.classList.remove('show');
    });

    window.addEventListener('click', (event) => {
        if (event.target == modalContainer) {
            modalContainer.classList.remove('show');
        }
    });

    // Populate the modal window with the image, title, and description
    // You can use the same template you're using in other places
    const modalContent = templateCard
        .replace('${img}', wallpapers[randomIndex].file)
        .replace('${title}', wallpapers[randomIndex].name)
        .replace('${describe}', wallpapers[randomIndex].describe);

    // Add the modal content to the modal container
    modalContainer.innerHTML = modalContent;
};

function openTheMenu() {
    openMenu.style.left = '-50px';
    openMenu.style.transition = 'all 0.7s';
    menuBar.style.transition = 'all 0.7s';
    menuBar.style.left = '0px';
}

function closeTheMenu() {
    openMenu.style.left = '10px';
    openMenu.style.transition = 'all 1s';
    menuBar.style.left = '-600px';
}

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
}

function renderImage(id) {

    //clear page before rendering the catalog
    clearPage();

    //Replace a data in template and rendering
    main.innerHTML += templateCard.replace('${img}', wallpapers[id - 1].file)
                                  .replace('${title}', wallpapers[id - 1].name)
                                  .replace('${describe}', wallpapers[id - 1].describe);

    //When we try to call a modal window, we need to declare variables inside the second template!

        //Referring to a modal window in DOM
        const modalContainer = document.getElementById('modal_container');

        //Referring to a button 'More info' in DOM
        const open = document.getElementById('open');

        //Reffering to a button 'Close' in DOM
        const close = document.getElementById('close');

        //Referring to a link 'Download' in DOM
        const linkDl = document.getElementById('download');

        //Set an attribute href and specify which exactly will be pic with method setAttribute
        linkDl.setAttribute('href', wallpapers[id - 1]['file']);

        //Set addEventListener on a button 'More info'
        open.addEventListener('click', () => {
            modalContainer.classList.add('show');
        });
        
        //Set addEventListener on a button 'Close'
        close.addEventListener('click', () => {
            modalContainer.classList.remove('show');
        });

        //Reffering to a window (Any place besides a modal window, and set addEventListener and function, if a place of click not a modal window, we'll remove class 'show'
        window.addEventListener('click', (event) => {
            if (event.target == modalContainer) {
                modalContainer.classList.remove('show');
            }
        })
}

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
}



//click and appears menu
openMenu.addEventListener('click', openTheMenu);
//click and close menu
closeMenu.addEventListener('click', closeTheMenu);

// ----------------------------------------------------------------//
//view button to toggle class between grid and flex-direction column
const cards = document.querySelectorAll('.flex-box-group');
const pics = document.querySelectorAll('.flex-box-group .pic');
const view = document.getElementById('view');

//Flag indicating whether the function is allowed to be used
let viewEnabled = true;
let gridViewEnabled = false;

//in order to toggle classes in one div
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
}

//Declare event for button view with function toggleClasses
view.addEventListener('click', toggleView);

//Create event listener on parent's element
menuBar.addEventListener('click', (event) => {

    //Check if the target element is a button with class "action-button"
    if (event.target.classList.contains('action-button')) {

        const buttonId = event.target.id;

        //run a function on based ID button
        switch(buttonId) {

        }
    }

});