'use strict';
const burger = document.querySelector(".header__burger-box");
const burgerIcon = document.querySelectorAll(".header__burger-icon");
const nav = document.querySelector(".nav");


burger.addEventListener("click", function () {
   burgerIcon.forEach((item, i) => {
      // Когда возращает true добавляем класс с задержкой
      if (i == 0 && item.className == "header__burger-icon") {
         setTimeout(function () {
            item.classList.add("header__burger-icon--open");
         }, 0);
      } else if (i == 1 && item.className == "header__burger-icon") {
         setTimeout(function () {
            item.classList.add("header__burger-icon--open");
         }, 50);
      } else if (i == 2 && item.className == "header__burger-icon") {
         setTimeout(function () {
            item.classList.add("header__burger-icon--open");
         }, 200);
      } else if (i == 3 && item.className == "header__burger-icon") {
         setTimeout(function () {
            item.classList.add("header__burger-icon--open");
         }, 300);
      }

      // Когда возращает true для нового класса удаляем класс с задержкой
      else if (i == 3 && item.className != "header__burger-icon") {
         setTimeout(function () {
            item.className = "header__burger-icon";
         }, 0);
      } else if (i == 2 && item.className != "header__burger-icon") {
         setTimeout(function () {
            item.className = "header__burger-icon";
         }, 50);
      } else if (i == 1 && item.className != "header__burger-icon") {
         setTimeout(function () {
            item.className = "header__burger-icon";
         }, 200);
      } else if (i == 0 && item.className != "header__burger-icon") {
         setTimeout(function () {
            item.className = "header__burger-icon";
         }, 300);
      }
   });

   /* Выдвигаем боковое меню добавляя и удаляя клас элементу */
   if (nav.classList == 'nav') {
      nav.classList.add('nav--open') 
   } else {
      nav.classList.remove('nav--open')
   }
});