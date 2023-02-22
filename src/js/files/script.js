// Подключение функционала "Чертогов Фрилансера"
import {
  isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
  flsModules
} from "./modules.js";



document.onscroll = function () {
  var dark = document.querySelector("#dark").getBoundingClientRect().top;
  document.body.classList.toggle("dark", dark <= window.innerHeight);
  var light = document.querySelector("#light").getBoundingClientRect().top;

  document.body.classList.remove("dark");
  document.body.classList.toggle("light", light <= window.innerHeight);
}