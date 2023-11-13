import wallpapers from "./catalog.js";
import { openTheMenu, closeTheMenu }from "./menu.js";

const main = document.querySelector('main');
const backgroundBody = document.querySelector('body');
const footer = document.querySelector('footer');
const templateCatalog = document.getElementById('tmpl-catalog').innerHTML;
const templateCategories = document.getElementById('tmpl-categories');
const templateCard = document.getElementById('tmpl-card').innerHTML;
const allCategories = document.getElementById('categories');
const randomCard = document.getElementById('randomCard');
const randomBg = document.getElementById('randomBg');
//How to open bar menu
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const buttonBack = document.querySelector('.buttonBack');
//view button to toggle class between grid and flex-direction column
const view = document.getElementById('view');
const cssLink = document.getElementById('cssLink');

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

//... Other events listeners

function renderCategoriesList() {
    clearPage();

    reloadPageWithBg();

    console.log('Categories are avaliable!');
    
    //Get keys of categories from object wallpapers
    Object.keys(wallpapers).forEach((category) => {

        // Create a div element for category
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');
        categoryContainer.classList.add('bg-pan-tl');

        // Append a class category to created element
        const categoryDescribe = document.createElement('p');
        categoryDescribe.classList.add('catDescribe');

        // Create a variable to store "catinfo" attribute
        let catInfoText = '';

        // Loop through the wallpapers in the current category
        wallpapers[category].forEach((wallpaper) => {
            if (wallpaper.catinfo) {
                catInfoText = wallpaper.catinfo;
            }
        });

        // Set the text content of the category description element
        categoryDescribe.textContent = catInfoText;

        // Create a div element for the category name
        const categoryElement = document.createElement('div');
        // Add a CSS class for styling
        categoryElement.classList.add('category');

        //Choose a random wallpaper from the category
        const randomWallpaper = wallpapers[category][0];

        //Set the background image of the category element
        categoryContainer.style.backgroundImage = `url(${randomWallpaper.file})`;
        categoryContainer.style.backgroundSize = 'cover';
        categoryContainer.style.backgroundPosition = 'center';
        // categoryContainer.style.;

        //Define contain of element based on name of category
        categoryElement.innerHTML = `<h1 class="categoriesName">${category}</h1>
        `;
        // Append both the category name and description to the container
        categoryContainer.appendChild(categoryElement);
        categoryContainer.appendChild(categoryDescribe);
        
        // Event listener for element of category
        categoryElement.addEventListener('click', renderChosenCategory);

        // Append an element on the page in 'main'
        main.appendChild(categoryContainer);
        footer.style.opacity = 0;
        buttonBack.style.opacity = 0;
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

    //Append attributes after addEventListener to body element
    backgroundBody.style.backgroundImage = `url(${randomImg})`;
    backgroundBody.style.backgroundRepeat = 'no-repeat';
    backgroundBody.style.backgroundAttachment = 'fixed';
    backgroundBody.style.transition = 'all 0.7s';
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

            //create an element from template
            const element = document.createElement('div');

            element.innerHTML = templateCatalog;

            const pic = element.querySelector('.pic');
            const title = element.querySelector('.title');

            //set a path to image and name
            pic.src = wallpaper.file;
            title.textContent = wallpaper.name;
            
            //append a listener for display an element
            element.addEventListener('click', () => {
                renderImage(trimmedCategory, index + 1);
            });

            buttonBack.style.opacity = 1;
            buttonBack.style.pointerEvents = 'auto';
            buttonBack.addEventListener('click', () => {
                renderCategoriesList();
            });

            // Add an animation of appearing element
            element.classList.add('fade-in');
            element.classList.add('flex-box-group');

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

function renderImage(category, id) {
    // Clear the page before rendering the catalog
    clearPage();
    let selectedCategory;
        // Check if the category exists in the wallpapers object
        if (wallpapers.hasOwnProperty(category)) {
            // Select the category and the specific image
            selectedCategory = wallpapers[category];
            // Check if id is a valid index within the selected category
            if (id >= 1 && id <= selectedCategory.length) {
                const imageData = selectedCategory[id - 1];
                // Create an element from template
                const template = document.getElementById('tmpl-card');
                // Import element content <template>
                const card = document.importNode(template.content, true);
                // Replace data in template
                const largePic = card.querySelector('.largePic');
                const title = card.querySelector('.titleModal');
                const describe = card.querySelector('.describe');
                const downloadImg = card.getElementById('download');
    
                largePic.src = imageData.file;
                title.textContent = imageData.name;
                describe.textContent = imageData.describe;
                downloadImg.href = imageData.file;

                // Display the created element on the page
                const modalContainer = card.getElementById('modal_container');
                const openButton = card.querySelector('.info');
                const closeButton = card.querySelector('.closeMe');
                const buttonBack = document.querySelector('.buttonBack');
                
                main.appendChild(card);
                footer.style.opacity = 1;
                buttonBack.style.opacity = 1;
                buttonBack.style.pointerEvents = 'auto';

                openButton.addEventListener('click', () => {
                    modalContainer.classList.add('show');
                });

                closeButton.addEventListener('click', () => {
                    modalContainer.classList.remove('show');
                    modalContainer.style.transition = '.5s';
                });

                buttonBack.addEventListener('click', () => {
                    renderChosenCategory(category);
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

                console.log(imageData);
            } else {
                console.log('Invalid image ID.');
            }
        } else {
            console.log('Invalid category.', category);
        }
};

function displayGridButton() {
    if(window.innerWidth > 800) {
        view.style.display = 'none';
    } else {
        view.style.display = 'block';
    }
};

function isGridViewEnabledCss() {
    return cssLink.href.includes('grid.css');
};

function displayRandomImage() {

    // Clear the page
    clearPage();

    //Get all categories in wallpapers (Popular, Animals, Cars...)
    const categories = Object.keys(wallpapers);
    
    //If categories > than 0 (Obviously more)
    if(categories.length > 0) {
        
        //randomCategoryIndex in categories.length
        const randomCategoryIndex = Math.floor(Math.random() * categories.length);
        
        //Random category with random index
        const randomCategory = categories[randomCategoryIndex];

        //All wallpapers on one random category
        const imagesInCategory = wallpapers[randomCategory];

        //If values of images more than 0 in random category
        if (imagesInCategory.length > 0) {

            //random image index for image in random category
            const randomImageIndex = Math.floor(Math.random() * imagesInCategory.length);

            //random image in random category
            const randomImage = imagesInCategory[randomImageIndex];

            //Create an element for card of image
            const card = document.createElement('div');

            card.innerHTML = templateCard
                .replace('${img}', randomImage.file)
                .replace('${title}', randomImage.name)
                .replace('${describe}', randomImage.describe);
        
            //For appearing animation
            const largePic = card.querySelector('.largePic');
            largePic.classList.add('fade-in');
        
            const title = card.querySelector('.titleModal');
            const describe = card.querySelector('.describe');
            const infoButton = card.querySelector('.info');
            const closeButton = card.querySelector('.closeMe');
            const modalContainer = card.querySelector('.modal-container');
            
            //Set attributies of image, title, and describe
            largePic.src = randomImage.file;
            title.textContent = randomImage.name;
            describe.textContent = randomImage.describe;
        
            //Append listeners for buttons "More info and "Close Me"
            infoButton.addEventListener('click', () => modalContainer.classList.add('show'));
            closeButton.addEventListener('click', () => modalContainer.classList.remove('show'));
            
            //Append a created element in the page
            main.appendChild(card); 
            footer.style.opacity = 1;
        }
    
    };

};

function clearPage() {
    //Replace a template for emptiness
    main.innerHTML = '';
};