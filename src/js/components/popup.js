if (window.location.pathname == "/about.html") {
   const modal = document.querySelector(".pop-up");
   const openBtn = document.querySelectorAll(".card__btn");
   const closeBtn = document.querySelector(".pop-up__close-btn");
   const title = document.querySelector(".pop-up__title");
   const subTitle = document.querySelector(".pop-up__subtitle");
   const omlineBtn = document.querySelector(".section-5__btn");

   omlineBtn.addEventListener("click", () => {
      title.innerText = "How to create your own business from scratch";
      subTitle.innerText =
         "Online training to launch your brand from scratch.Leave your contacts and I will contact you to discuss the details and answer questions.";
      modal.showModal();
   });

   openBtn.forEach((item, index) => {
      item.addEventListener("click", () => {
         if (index == 0) {
            title.innerText = "An introductory consultation";
            subTitle.innerText =
               "Leave your contacts and I will contact you to discuss the convenient time for consultation.n.";
         } else if (index == 1) {
            title.innerText = "One -time consultationon";
            subTitle.innerText =
               "Leave your contacts and I will contact you to discuss the convenient time for consultation.n.";
         } else if (index == 2) {
            title.innerText = "Group mentoring";
            subTitle.innerText =
               "Leave your contacts and I will contact you to discuss the details and answer questions.";
         } else if (index == 3) {
            title.innerText = "Personal mentoring";
            subTitle.innerText =
               "Leave your contacts and I will contact you to discuss the details and answer questions.";
         } else if (index == 4) {
            title.innerText = "Brand promotion.";
            subTitle.innerText =
               "Want to scald business quickly and with minimal losses?I know how. ONLY OF THE CONTACTS AND I will contact you to discuss the details and answer questions.";
         }
         modal.showModal();
      });
   });
   closeBtn.addEventListener("click", () => {
      modal.close();
   });
}
