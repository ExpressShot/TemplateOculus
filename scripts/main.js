"use strict";

const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

tabItem.forEach(function (element) {
  element.addEventListener("click", openContent);
});

function openContent(evt) {
  const tabTarget = evt.currentTarget; //Находить по клику
  const button = tabTarget.dataset.button; //Добавлять класс
  tabItem.forEach(function (item) {
    item.classList.remove("tabs__btn-item--active"); //Удалить класс active
  });
  tabContent.forEach(function (item) {
    item.classList.remove("tabs__content-item--active");
  });
  tabTarget.classList.add("tabs__btn-item--active"); //Добавление по нажатию
  document
    .querySelector(`#${button}`)
    .classList.add("tabs__content-item--active");
}
