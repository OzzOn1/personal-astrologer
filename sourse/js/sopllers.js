// "use strict"


// const SPOLLERS_ARRAY = document.querySelectorAll('[data-spollers]');
// if (SPOLLERS_ARRAY.length > 0) {
//     // получение обычного спойлера data-sopllers
//     const SPOLLERS_REGULAR = Array.from(SPOLLERS_ARRAY).filter(function (item, index, self) {
//         return !item.dataset.spollers.split(",")[0];
//     });
//     // инициалеизация обычных спойлеров
//     if (SPOLLERS_REGULAR.length > 0) {
//         initSpollers(SPOLLERS_REGULAR);
//     }

//     // инициализация
//     function initSpollers (SPOLLERS_ARRAY) {
//         SPOLLERS_ARRAY.forEach(spollersBlock => {
//             spollersBlock = spollersBlock;
//             spollersBlock.classList.add('_init');
//             initSpollerBody(spollersBlock);
//             spollersBlock.addEventListener("click",setSpollerAction)
//         });
//     }

//     // работа с контентом
//     function initSpollerBody (spollersBlock, hideSpollerBody = true) {
//         const SPOLLERS_TITLES = spollersBlock.querySelectorAll('[data-spoller]');
//         if (SPOLLERS_TITLES.length > 0) {
//             SPOLLERS_TITLES.forEach(spollerTitle => {
//                 if (hideSpollerBody) {
//                     spollerTitle.removeAttribute('tabindex');
//                     if (!spollerTitle.classList.contains('_active')) {
//                         spollerTitle.nextElementSibling.hidden = true;
//                     } else {
//                         spollerTitle.setAttribuet('tabindex, -1');
//                         spollerTitle.nextElementSibling.hidden = false; 
//                     }
//                 }
//             });
//         }
//     }
// }

