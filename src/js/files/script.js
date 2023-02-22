// Подключение функционала "Чертогов Фрилансера"
import {
  isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
  flsModules
} from "./modules.js";



// document.body.onscroll = function () {
//   document.querySelector('.technology').classList.add('black');
// }


window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if (window.innerWidth > 768) {
    document.querySelectorAll('.page').forEach((el, i) => {
      if (el.offsetTop - document.querySelector('.menu__list').clientHeight <= scrollDistance) {
        document.querySelectorAll('.menu__list a').forEach((el) => {
          if (el.classList.contains('active')) {
            el.classList.remove('active');
          }
        });

        document.querySelectorAll('.menu__list li')[i].querySelector('a').classList.add('active');
      }
    });
  }
});