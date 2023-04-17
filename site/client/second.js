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

//находим коробку под карточки
const main = document.querySelector('main');

//получаем текст шаблона каталога
const templateCatalog = document.getElementById('tmpl-catalog').innerHTML;

//получаем текст шаблона карточки
const templateCard = document.getElementById('tmpl-card').innerHTML;

//вызываем функцию при загрузке страницы
renderCatalog();

//создаем функцию по отрисовке каталога блоков карточек (показаны только первые картинки в массиве)
function renderCatalog() {

    clearPage();

    //рисуем данные на экран
    for (let i = 0; i < wallpapers.length; i++ ) {

        //подставляем в шаблон данные, заменяем, и рендерим все картинки
        main.innerHTML += templateCatalog.replace('${img}', wallpapers[i])
                                         .replace('${id}', i+1);
    }
}


function renderImage(id) {

    //очищаем страницу
    clearPage();

    //подставляем в шаблон данные, заменяем и рендерим
    main.innerHTML += templateCard.replace('${img}', wallpapers[id - 1]);

    //При попытке обратиться к модалке внутри второго темлейта, нужно создавать переменные и функции внутри самой функции отрисовки ВТОРОГО темплейта;

        //обращаемся к модалке в DOM дереве
        const modalContainer = document.getElementById('modal_container');

        //обращаемся к кнопке more info в DOM дереве
        const open = document.getElementById('open');

        //обращаемся к кнопке close в DOM дереве
        const close = document.getElementById('close');

        //обращаемся к ссылке download в DOM
        const linkDl = document.getElementById('download');

        //задаем атрибут href и указываем какая именно будет картинка с помощью метода setAttribute
        linkDl.setAttribute('href', wallpapers[id - 1]);

        //Вешаем addEventListener на кнопку more info
        open.addEventListener('click', () => {
            modalContainer.classList.add('show');
        });
        
        //Вешаем addEventListener на кнопку close
        close.addEventListener('click', () => {
            modalContainer.classList.remove('show');
        });

        //обращаемся к элементу window (любое место кроме модалки), и вешаем слушатель по клику, и функцию, если место клика не модалка (Если евент (открытая модалка) равен контейнеру который мы вызвали, то мы убираем класс show)
        window.addEventListener('click', (event) => {
            if (event.target == modalContainer) {
                modalContainer.classList.remove('show');
            }
        })
}

//функция очистки страницы
function clearPage() {

    //заменяем шаблон на пустоту
    main.innerHTML = '';

}





