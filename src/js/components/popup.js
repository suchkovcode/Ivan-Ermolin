const modal = document.querySelector(".pop-up");
const openBtn = document.querySelectorAll(".card__btn");
const closeBtn = document.querySelector(".pop-up__close-btn");
const title = document.querySelector(".pop-up__title");
const subTitle = document.querySelector(".pop-up__subtitle");
const omlineBtn = document.querySelector(".section-5__btn");
const omlineOpen = document.querySelector(".section-5__btn");

omlineBtn.addEventListener("click", () => {
   title.innerText = "Как создать свой бизнес с нуля";
   subTitle.innerText = "Онлайн обучение по запуску своего бренда с нуля. Оставьте свои контакты и я свяжусь с вами, чтобы обсудить детали и ответить на вопросы.";
   modal.showModal();
});

openBtn.forEach((item, index) => {
   item.addEventListener("click", () => {
      if (index == 0) {
         title.innerText = "Ознакомительная консультация";
         subTitle.innerText = "Оставьте свои контакты и я свяжусь с вами, чтобы обсудить удобное время для консультации.";
      } else if (index == 1) {
         title.innerText = "Разовая консультация";
         subTitle.innerText = "Оставьте свои контакты и я свяжусь с вами, чтобы обсудить удобное время для консультации.";
      } else if (index == 2) {
         title.innerText = "Групповое наставничество";
         subTitle.innerText = "Оставьте свои контакты и я свяжусь с вами, чтобы обсудить детали и ответить на вопросы.";
      } else if (index == 3) {
         title.innerText = "Личное наставничество";
         subTitle.innerText = "Оставьте свои контакты и я свяжусь с вами, чтобы обсудить детали и ответить на вопросы.";
      } else if (index == 4) {
         title.innerText = "Продвижение бренда.";
         subTitle.innerText = "Хотите быстро и с минимальными потерями масштабировать бизнес? Я знаю как.Оставьте свои контакты и я свяжусь с вами, чтобы обсудить детали и ответить на вопросы.";
      }
      modal.showModal();
   });
});
closeBtn.addEventListener("click", () => {
   modal.close();
});
