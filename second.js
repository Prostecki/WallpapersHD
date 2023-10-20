const wallpapers = [
    {'file': 'img/1.jpeg', 'name': 'Textures', 'describe': 'Beautiful textures'},
    {'file': 'img/2.jpeg', 'name': 'Shore', 'describe': 'Scenic shoreline'},
    {'file': 'img/3.jpeg', 'name': 'Ball', 'describe': 'Playful ball'},
    {'file': 'img/4.jpeg', 'name': 'Space car', 'describe': 'Futuristic space car'},
    {'file': 'img/5.jpeg', 'name': 'Chess', 'describe': 'Chessboard'},
    {'file': 'img/6.jpeg', 'name': 'Christmas', 'describe': 'Christmas decorations'},
    {'file': 'img/7.jpeg', 'name': 'New-York', 'describe': 'New York cityscape'},
    {'file': 'img/8.jpeg', 'name': 'Winter', 'describe': 'Winter wonderland'},
    {'file': 'img/9.jpeg', 'name': 'Tale', 'describe': 'Magical fairy tale'},
    {'file': 'img/animals1.jpeg', 'name': 'Wolf', 'describe': 'Majestic wolf'},
    {'file': 'img/animals2.jpeg', 'name': 'Cat', 'describe': 'Cute cat'},
    {'file': 'img/animals3.jpeg', 'name': 'Lynx', 'describe': 'Wild lynx'},
    {'file': 'img/animals4.jpeg', 'name': 'Raccoon', 'describe': 'Playful raccoon'},
    {'file': 'img/animals5.jpeg', 'name': 'Dog', 'describe': 'Loyal dog'},
    {'file': 'img/animals6.jpeg', 'name': 'Wolf on a mountain', 'describe': 'Wolf on a mountain'},
    {'file': 'img/animals7.jpeg', 'name': 'Kitty', 'describe': 'Adorable kitty'},
    {'file': 'img/animals8.jpeg', 'name': 'Wolves', 'describe': 'Pack of wolves'},
    {'file': 'img/animals9.jpeg', 'name': 'Black cat', 'describe': 'Mysterious black cat'},
    {'file': 'img/auto1.jpeg', 'name': 'BMW', 'describe': 'Sleek BMW car'},
    {'file': 'img/auto2.jpeg', 'name': 'BMW Black', 'describe': 'Black BMW'},
    {'file': 'img/auto3.jpeg', 'name': 'BWM Night', 'describe': 'BMW at night'},
    {'file': 'img/auto4.jpeg', 'name': 'Sportcar', 'describe': 'Sporty car'},
    {'file': 'img/auto5.jpeg', 'name': 'Sportcar 2', 'describe': 'Another sporty car'},
    {'file': 'img/auto6.jpeg', 'name': 'Track car', 'describe': 'Track racing car'},
    {'file': 'img/auto7.jpeg', 'name': 'Mercedess', 'describe': 'Mercedes-Benz'},
    {'file': 'img/auto8.jpeg', 'name': 'Porsche', 'describe': 'Luxury Porsche car'},
    {'file': 'img/auto9.jpeg', 'name': 'Speed car', 'describe': 'High-speed racing car'},
    {'file': 'img/food1.jpeg', 'name': 'Fika', 'describe': 'Fika time'},
    {'file': 'img/food2.jpeg', 'name': 'Cozy caffe', 'describe': 'Cozy cafe'},
    {'file': 'img/food3.jpeg', 'name': 'Caffe Latte', 'describe': 'Caffe Latte'},
    {'file': 'img/food4.jpeg', 'name': 'Strawberries', 'describe': 'Fresh strawberries'},
    {'file': 'img/food5.jpeg', 'name': 'Orange', 'describe': 'Juicy orange'},
    {'file': 'img/food6.jpeg', 'name': 'Pineapple', 'describe': 'Tropical pineapple'},
    {'file': 'img/food7.jpeg', 'name': 'Candy', 'describe': 'Colorful candy'},
    {'file': 'img/food8.jpeg', 'name': 'Fruits', 'describe': 'Assorted fruits'},
    {'file': 'img/food9.jpeg', 'name': 'Strawberries 2', 'describe': 'More strawberries'},
    {'file': 'img/nature1.jpeg', 'name': 'Forest', 'describe': 'Mystical forest'},
    {'file': 'img/nature2.jpeg', 'name': 'Night sky', 'describe': 'Starry night sky'},
    {'file': 'img/nature3.jpeg', 'name': 'Morning nature', 'describe': 'Morning in nature'},
    {'file': 'img/nature4.jpeg', 'name': 'Winter nature', 'describe': 'Winter in the wild'},
    {'file': 'img/nature5.jpeg', 'name': 'Autumn', 'describe': 'Beautiful autumn'},
    {'file': 'img/nature6.jpeg', 'name': 'Fantasy', 'describe': 'Fantasy landscape'},
    {'file': 'img/nature7.jpeg', 'name': 'River', 'describe': 'Tranquil river'},
    {'file': 'img/nature8.jpeg', 'name': 'Dream', 'describe': 'Dreamy landscape'},
    {'file': 'img/nature9.jpeg', 'name': 'Road', 'describe': 'Endless road'},
    {'file': 'img/space1.jpeg', 'name': 'Space', 'describe': 'Outer space'},
    {'file': 'img/space2.jpeg', 'name': 'Space 2', 'describe': 'More outer space'},
    {'file': 'img/space3.jpeg', 'name': 'Space 3', 'describe': 'Even more outer space'},
    {'file': 'img/space4.jpeg', 'name': 'Space 4', 'describe': 'Space exploration'},
    {'file': 'img/space5.jpeg', 'name': 'Space 5', 'describe': 'Galactic beauty'},
    {'file': 'img/space6.jpeg', 'name': 'Space 6', 'describe': 'Infinite space'},
    {'file': 'img/space7.jpeg', 'name': 'Space 7', 'describe': 'Space adventure'},
    {'file': 'img/space8.jpeg', 'name': 'Space 8', 'describe': 'Journey to the stars'},
    {'file': 'img/space9.jpeg', 'name': 'Space 9', 'describe': 'Celestial wonders'}
  ];  

//Get a variable for all wallpapers
const main = document.querySelector('main');

//Get a template of Catalog
const templateCatalog = document.getElementById('tmpl-catalog').innerHTML;

//Get a template of one Card
const templateCard = document.getElementById('tmpl-card').innerHTML;

//Declare catalog button in menu
const mainCatalog = document.getElementById('mainCatalog');

//Declare randomButton with id randomButton
const randomCard = document.getElementById('randomCard');

//Declare randomBg with id
const randomBg = document.getElementById('randomBg');

//Define a media query 
const mediaQuery = window.matchMedia('(max-width: 800px)');

function toggleView() {

    if (viewEnabled) {

        gridViewEnabled = !gridViewEnabled;
        
        main.classList.toggle('flex-box-main-grid', gridViewEnabled);
        main.classList.toggle('flex-box-main', !gridViewEnabled);

        console.log('work with groups');
        
        allCards.forEach(card => {
            console.log('work with cards');
            card.classList.toggle('flex-box-group-grid', gridViewEnabled);
            card.classList.toggle('flex-box-group', !gridViewEnabled);
        });
        
        allPics.forEach(pic => {
            console.log('work with pics');
            pic.classList.toggle('pic-grid', gridViewEnabled);
            pic.classList.toggle('pic', !gridViewEnabled);
        });
    }
}

//Call the function when opening a page
renderCatalog();

mainCatalog.addEventListener('click', renderCatalog);

//Create a function for rendering all wallpapers
function renderCatalog() {

    //clear page before rendering the catalog
    clearPage();

    //Update the background of body
    setRandomBackground();

    //Rendering a data on the screen
    for (let i = 0; i < wallpapers.length; i++ ) {

        //Replace a date in template and rendering all wallpapers
        main.innerHTML += templateCatalog.replace('${img}', wallpapers[i]['file'])
                                         .replace('${id}', i+1)
                                         .replace('${title}', wallpapers[i]['name']);
    }
}

function renderImage(id) {

    //clear page before rendering the catalog
    clearPage();

    //Replace a data in template and rendering
    main.innerHTML += templateCard.replace('${img}', wallpapers[id - 1]['file'])
                                  .replace('${title}', wallpapers[id - 1]['name'])
                                  .replace('${describe}', wallpapers[id - 1]['describe']);

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

//Click button and appears random wallpaper
randomCard.addEventListener('click', () => {
    
    // Generate a random index to select a wallpaper from the wallpapers array
    const randomIndex = Math.floor(Math.random() * wallpapers.length);

    //clear page
    clearPage();
    
    //Replace a data in template and render with math random (randomWallpaper)
    main.innerHTML += templateCard.replace('${img}', wallpapers[randomIndex]['file'])
                                  .replace('${title}', wallpapers[randomIndex]['name'])
                                  .replace('${describe}', wallpapers[randomIndex]['describe']);
    
                                  //Referring to a modal window in DOM
        const modalContainer = document.getElementById('modal_container');
    
        //Referring to a button 'More info' in DOM
        const open = document.getElementById('open');
    
        //Reffering to a button 'Close' in DOM
        const close = document.getElementById('close');
    
        //Referring to a link 'Download' in DOM
        const linkDl = document.getElementById('download');
    
        //Set an attribute href and specify which exactly will be pic with method setAttribute
        linkDl.setAttribute('href', wallpapers[randomIndex]['file']);
    
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
        });

});

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

//Function of clear page
function clearPage() {
    //Replace a template for emptiness
    main.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {

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
})

//How to open bar menu
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menuBar = document.getElementById('menuBar');

function closeTheMenu() {
    openMenu.style.left = '10px';
    openMenu.style.transition = 'all 1s';
    menuBar.style.left = '-600px';
}

function openTheMenu() {
    openMenu.style.left = '-50px';
    openMenu.style.transition = 'all 0.7s';
    menuBar.style.transition = 'all 0.7s';
    menuBar.style.left = '0px';
}

//click and appears menu
openMenu.addEventListener('click', openTheMenu);

//click and close menu
closeMenu.addEventListener('click', closeTheMenu);

// ----------------------------------------------------------------//
//view button to toggle class between grid and flex-direction column

//button view
const view = document.getElementById('view');

//Define all cards in catalog
const allCards = document.querySelectorAll('.flex-box-group');

//Define all pics in allCards within flex-box-group
const allPics = document.querySelectorAll('.flex-box-group .pic');

//Flag indicating whether the function is allowed to be used
let viewEnabled = true;

let gridViewEnabled = false;

//in order to toggle classes in one div

function toggleView() {

    if (viewEnabled) {

        gridViewEnabled = !gridViewEnabled;
        
        main.classList.toggle('flex-box-main-grid', gridViewEnabled);
        main.classList.toggle('flex-box-main', !gridViewEnabled);

        console.log('work with groups');
        
        allCards.forEach(card => {
            console.log('work with cards');
            card.classList.toggle('flex-box-group-grid', gridViewEnabled);
            card.classList.toggle('flex-box-group', !gridViewEnabled);
        });
        
        allPics.forEach(pic => {
            console.log('work with pics');
            pic.classList.toggle('pic-grid', gridViewEnabled);
            pic.classList.toggle('pic', !gridViewEnabled);
        });
    }
}

//Declare event for button view with function toggleClasses
view.addEventListener('click', toggleView);