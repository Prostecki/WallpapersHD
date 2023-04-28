const wallpapers = [
           'img/1.jpeg',
           'img/2.jpeg',
           'img/3.jpeg',
           'img/4.jpeg',
           'img/5.jpeg',
           'img/6.jpeg',
           'img/7.jpeg',
           'img/8.jpeg',
           'img/9.jpeg',
           'img/animals1.jpeg',
            'img/animals2.jpeg',
            'img/animals3.jpeg',
            'img/animals4.jpeg',
            'img/animals5.jpeg',
            'img/animals6.jpeg',
            'img/animals7.jpeg',
            'img/animals8.jpeg',
            'img/animals9.jpeg',
            'img/auto1.jpeg',
            'img/auto2.jpeg',
            'img/auto3.jpeg',
            'img/auto4.jpeg',
            'img/auto5.jpeg',
            'img/auto6.jpeg',
            'img/auto7.jpeg',
            'img/auto8.jpeg',
            'img/auto9.jpeg',
            'img/food1.jpeg',
            'img/food2.jpeg',
            'img/food3.jpeg',
            'img/food4.jpeg',
            'img/food5.jpeg',
            'img/food6.jpeg',
            'img/food7.jpeg',
            'img/food8.jpeg',
            'img/food9.jpeg',
            'img/nature1.jpeg',
            'img/nature2.jpeg',
            'img/nature3.jpeg',
            'img/nature4.jpeg',
            'img/nature5.jpeg',
            'img/nature6.jpeg',
            'img/nature7.jpeg',
            'img/nature8.jpeg',
            'img/nature9.jpeg',
            'img/space1.jpeg',
            'img/space2.jpeg',
            'img/space3.jpeg',
            'img/space4.jpeg',
            'img/space5.jpeg',
            'img/space6.jpeg',
            'img/space7.jpeg',
            'img/space8.jpeg',
            'img/space9.jpeg'
];

//Get a variable for all wallpapers
const main = document.querySelector('main');

//Get a template of Catalog
const templateCatalog = document.getElementById('tmpl-catalog').innerHTML;

//Get a template of one Card
const templateCard = document.getElementById('tmpl-card').innerHTML;

//Call the function when opening a page
renderCatalog();

//Create a function for rendering all wallpapers
function renderCatalog() {

    //clear page before rendering the catalog
    clearPage();

    //Rendering a data on the screen
    for (let i = 0; i < wallpapers.length; i++ ) {

        //Replace a date in template and rendering all wallpapers
        main.innerHTML += templateCatalog.replace('${img}', wallpapers[i])
                                         .replace('${id}', i+1);
    }
}


function renderImage(id) {

    //clear page before rendering the catalog
    clearPage();

    //Replace a data in template and rendering
    main.innerHTML += templateCard.replace('${img}', wallpapers[id - 1]);

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
        linkDl.setAttribute('href', wallpapers[id - 1]);

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

//Function of clear page
function clearPage() {

    //Replace a template for emptiness
    main.innerHTML = '';

}





