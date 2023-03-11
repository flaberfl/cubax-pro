// Подключение функционала "Чертогов Фрилансера"
import {
  isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
  flsModules
} from "./modules.js";



// document.onscroll = function () {
//   var dark = document.querySelector("#dark").getBoundingClientRect().top;
//   document.body.classList.toggle("dark", dark <= window.innerHeight);
//   var light = document.querySelector("#light").getBoundingClientRect().top;

//   document.body.classList.remove("dark");
//   document.body.classList.toggle("light", light <= window.innerHeight);
// }


// if (
//   "IntersectionObserver" in window &&
//   "IntersectionObserverEntry" in window &&
//   "intersectionRatio" in window.IntersectionObserverEntry.prototype
// ) {
//   let observer = new IntersectionObserver(entries => {
//     if (entries[0].boundingClientRect.y < 0) {
//       document.body.classList.add("header-not-at-top");
//     } else {
//       document.body.classList.remove("header-not-at-top");
//     }
//   });
//   observer.observe(document.querySelector("#anchor-black-th"));
// }

// console.log (ob)