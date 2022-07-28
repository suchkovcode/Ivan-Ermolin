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
class BigCircle {
   constructor() {
      this.root = document.body;
      this.cursor = document.querySelector(".curzr");
      this.circle = document.querySelector(".curzr .circle");
      this.dot = document.querySelector(".curzr .dot");

      this.pointerX = 0;
      this.pointerY = 0;
      this.cursorSize = 30;

      this.circleStyle = {
         boxSizing: "border-box",
         position: "fixed",
         top: `${this.cursorSize / -2}px`,
         left: `${this.cursorSize / -2}px`,
         zIndex: "9999999",
         width: `${this.cursorSize}px`,
         height: `${this.cursorSize}px`,
         backgroundColor: "#fff0",
         borderRadius: "50%",
         transition: "500ms, transform 96ms",
         userSelect: "none",
         pointerEvents: "none",
      };

      this.dotStyle = {
         boxSizing: "border-box",
         position: "fixed",
         zIndex: "9999999",
         width: "6px",
         height: "6px",
         backgroundColor: "#fffd",
         borderRadius: "50%",
         userSelect: "none",
         pointerEvents: "none",
         transition: "250ms, transform 72ms",
      };

      if (CSS.supports("backdrop-filter", "invert(1) grayscale(1)")) {
         this.circleStyle.backdropFilter = "invert(0.94) grayscale(1)";
         this.circleStyle.backgroundColor = "#fff0";
         this.dotStyle.backdropFilter = "invert(0.94) grayscale(1)";
         this.dotStyle.backgroundColor = "#fff0";
      } else {
         this.circleStyle.backgroundColor = "#000";
         this.circleStyle.opacity = "0.75";
         this.dotStyle.backgroundColor = "#fff";
         this.dotStyle.opacity = "0.75";
      }

      this.init(this.circle, this.circleStyle);
      this.init(this.dot, this.dotStyle);
   }

   init(el, style) {
      Object.assign(el.style, style);
      this.cursor.removeAttribute("hidden");

      document.body.style.cursor = "none";
      document.body.querySelectorAll("button, label, input, textarea, select, a").forEach((el) => {
         el.style.cursor = "inherit";
      });
   }

   move(event) {
      this.pointerX = event.pageX;
      this.pointerY = event.pageY + this.root.getBoundingClientRect().y;

      this.circle.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`;
      this.dot.style.transform = `translate3d(calc(-50% + ${this.pointerX}px), calc(-50% + ${this.pointerY}px), 0)`;

      if (event.target.localName === "button" || event.target.localName === "a" || event.target.onclick !== null || event.target.className.includes("curzr-hover")) {
         this.hover();
      }
   }

   hover() {
      this.circle.style.transform += ` scale(1.5)`;
   }

   click() {
      this.circle.style.transform += ` scale(0.75)`;
      setTimeout(() => {
         this.circle.style.transform = this.circle.style.transform.replace(` scale(0.75)`, "");
      }, 35);
   }

   remove() {
      this.circle.remove();
      this.dot.remove();
   }
}

(() => {
   const cursor = new BigCircle();
   if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.onmousemove = function (event) {
         cursor.move(event);
      };
      document.onclick = function () {
         cursor.click();
      };
   } else {
      cursor.remove();
   }
})();

