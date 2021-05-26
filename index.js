document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".nav__mobile-list");
  const mobileButton = document.querySelector(".button__mobile");
  const partnersButton = document.querySelector(".partners__button");
  const partnersList = document.querySelector(".js-partners-list");

  partnersButton.addEventListener("click", function (e) {
    e.preventDefault();

    if (partnersList.classList.contains("closed")) {
      console.log(1);
      partnersList.classList.remove("closed");
      partnersButton.innerHTML = "Закрыть";
    } else {
      partnersList.classList.add("closed");
      partnersButton.innerHTML = "All partners";
    }
  });

  mobileButton.addEventListener("click", function () {
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
      mobileButton.classList.remove("active");
    } else {
      mobileMenu.classList.add("active");
      mobileButton.classList.add("active");
    }
  });
});
