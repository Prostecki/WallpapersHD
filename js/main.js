import wallpapers from "./catalog.js";

const backgroundBody = document.querySelector('body');
const main = document.querySelector('main');
const templateCatalog = document.getElementById('tmpl-catalog').innerHTML;
const templateCategories = document.getElementById('tmpl-categories');
const templateCard = document.getElementById('tmpl-card').innerHTML;
const allCategories = document.getElementById('categories');
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

//render catalog after loading page
// renderCatalog();

renderCategoriesList();

//Declare a function with visible of button
displayGridButton();

document.addEventListener('DOMContentLoaded', reloadPageWithBg);
openMenu.addEventListener('click', openTheMenu);
closeMenu.addEventListener('click', closeTheMenu);
allCategories.addEventListener('click', renderCategoriesList);
randomCard.addEventListener('click', displayRandomImage);
randomBg.addEventListener('click', setRandomBackground);
window.addEventListener('resize', displayGridButton);
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
// Add a click event listener for category elements
main.addEventListener('click', (event) => {

    //Find closest parent's element with class category during click
    const categoryElement = event.target.closest('.category');

    //If it founded an element of category
    if (categoryElement) {

        //Get a text (name of category) from element
        const selectedCategory = categoryElement.textContent;

        //Call a function with chosen category
        renderChosenCategory(selectedCategory);
    }
});
// document.addEventListener('DOMContentLoaded', setRandomBackground);

// document.addEventListener('DOMContentLoaded', renderCategories);

//... Other events listeners

function renderCategoriesList() {
    
    clearPage();

    reloadPageWithBg();

    console.log('Categories are avaliable!');
    
    Object.keys(wallpapers).forEach((category) => {

        const categoryElement = document.createElement('div');

        categoryElement.classList.add('category');

        categoryElement.innerHTML = `<p class="categoriesName">${category}</p>`;
        
        categoryElement.addEventListener('click', renderChosenCategory);

        main.appendChild(categoryElement);

    });
};

function setRandomBackground() {

    // Get an array of category keys from the 'wallpapers' object
    const categoryKeys = Object.keys(wallpapers);

    // Generate a random index for selecting a category
    const randomCategoryIndex = Math.floor(Math.random() * categoryKeys.length);

    // Select a random category using the random index
    const randomCategory = categoryKeys[randomCategoryIndex];

    // Generate a random index for selecting an image from the selected category
    const randomIndex = Math.floor(Math.random() * wallpapers[randomCategory].length);

    //Declare a variable img with attributes of array
    const randomImg = wallpapers[randomCategory][randomIndex]['file'];

    console.log(randomImg);
    
    //Append attributes after addEventListener to body element
    backgroundBody.style.backgroundImage = `url(${randomImg})`;
    backgroundBody.style.backgroundRepeat = 'no-repeat';
    backgroundBody.style.backgroundAttachment = 'fixed';
    backgroundBody.style.transition = 'all 0.7s';

    //It's just test
    console.log('it works?');
};

console.log('All categories: ', Object.keys(wallpapers));

function renderImage(category, id) {
    // Clear the page before rendering the catalog
    clearPage();

    console.log('Category has choosen');

    // Check if the category exists in the wallpapers object
    if (wallpapers.hasOwnProperty(category)) {

        // Select the category and the specific image
        const selectedCategory = wallpapers[category];

        // Check if id is a valid index within the selected category
        if (id >= 1 && id <= selectedCategory.length) {
            const imageData = selectedCategory[id - 1];

            // Create an element from template
            const template = document.getElementById('tmpl-card');

            // Import element content <template>
            const templateContent = document.importNode(template.content, true);

            // Indicate a selector to templateContent
            const card = templateContent.querySelector('.singleCard');

            

            // Replace data in template
            const largePic = card.querySelector('.largePic');
            const title = card.querySelector('.titleModal');
            const describe = card.querySelector('.describe');

            largePic.src = imageData.file;
            title.textContent = imageData.name;
            describe.textContent = imageData.describe;

            // Display the created element on the page
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
            title.style.opacity = 0;
            title.style.transform = 'translateY(30px)';

            const delay = 100;

            setTimeout(() => {
                // Show an image and panel with animation
                largePic.style.opacity = 1;
                largePic.style.transform = 'scale(1)';
                largePic.style.transition = 'all 0.3s';
                title.style.opacity = 1;
                title.style.transform = 'translateY(0)';
            }, delay);
        } else {
            console.log('Invalid image ID.');
        }
    } else {
        console.log('Invalid category.');
    }
};

function reloadPageWithBg(){

    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 2); //delay with 100ms
    
    //get an array of categories from the "wallpapers" object
    const categoryKeys = Object.keys(wallpapers);

    // Generate a random index to select categories from the wallpapers array
    const randomCategoryIndex = Math.floor(Math.random() * categoryKeys.length);

    //get the wallpapers array for the selected category
    const randomCategory = categoryKeys[randomCategoryIndex];
    
    //Generate a random index to select a wallpaper from the selected category
    const randomIndex = Math.floor(Math.random() * wallpapers[randomCategory].length);
    
    //Declare a variable img with attributes of array
    const randomImg = wallpapers[randomCategory][randomIndex]['file'];

    //append attributes from array and change body style
    backgroundBody.style.backgroundImage = `url(${randomImg})`;
    backgroundBody.style.backgroundSize = 'cover';
    backgroundBody.style.transition = '0.4s';
};

function renderChosenCategory(category) {

    // Clear the page before rendering wallpapers
    clearPage();

    //check if a category is a valid string
    if (typeof category === 'string') {

    // Trim leading/trailing whitespace
    const trimmedCategory = category.trim();

    // Check if the selected category exists in the wallpapers object
    if (wallpapers.hasOwnProperty(trimmedCategory)) {
        //if the category exists, get an array of images in this category
        const wallpapersInCategory = wallpapers[trimmedCategory];

        // Loop through wallpapers in the selected category
        wallpapersInCategory.forEach((wallpaper, index) => {

            //Create a template for each image
            const template = document.createElement('template');

            // Replace template placeholders with wallpaper data
            template.innerHTML = templateCatalog
                .replace('${img}', wallpaper.file)
                .replace('${id}', index + 1)
                .replace('${title}', wallpaper.name);

            //create an element from template
            const element = template.content.firstElementChild;

            // Add a click event listener to each wallpaper element
            element.addEventListener('click', () => {
                renderImage(index + 1);
            });

            // Add an animation of appearing element
            element.classList.add('fade-in');

            //Append an element on a page
            main.appendChild(element);
            console.log("Choosen category is: " + trimmedCategory);
        });

    } else {
        //If a chosen category doesn't exist in object wallpapers, display a message
        console.log(`Category "${trimmedCategory}" not found.`);
    }
}
};

function displayGridButton() {
    if(window.innerWidth > 800) {
        console.log('testViewButton800')
        view.style.display = 'none';
    } else {
        view.style.display = 'block';
    }
};

function isGridViewEnabledCss() {
    return cssLink.href.includes('grid.css');
};

function clearPage() {
    //Replace a template for emptiness
    main.innerHTML = '';
};

// function renderCatalog() {
//     // Clear the page before rendering the catalog
//     clearPage();

//     //object.keys read entire array with all attributes 
//     const catalogHtml = Object.keys(wallpapers).map((category) => {

//         return wallpapers[category].map((wallpaper, index) => {
//             const template = document.createElement('template');
//             template.innerHTML = templateCatalog
//             .replace('${img}', wallpaper.file)
//             .replace('${id}', index + 1)
//             .replace('${title}', wallpaper.name);

//             const element = template.content.firstElementChild;

//             element.addEventListener('click', () => {
//                 // Define function renderImage with index
//                 renderImage(index + 1); 

//             });

//                 element.classList.add('fade-in');

//                 return element;

//             });
//         });
//                 catalogHtml.flat().forEach((element) => {
//                 main.appendChild(element);
//     });
// };

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
    console.log('It opens!');

    // document.addEventListener('click', closeTheMenuOnClick);
};

function closeTheMenu() {
    console.log('It closes!');
    openMenu.style.left = '10px';
    openMenu.style.transition = 'all 1s';
    menuBar.style.left = '-800px';
};

// function closeTheMenuOnClick(event) {
//     if (event.target !== openMenu && !openMenu.contains(event.target)) {
//         closeTheMenu();

//         document.removeEventListener('click', closeTheMenuOnClick);
//     }
// }