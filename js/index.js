//! Сохраняем в переменные все инпуты для ввода данных и кнопку "создать"
let inpName = document.querySelector("#inpName");
let inpImg = document.querySelector("#inpImg");
let inpNumber = document.querySelector("#inpNumber");
let inpSkills = document.querySelector("#inpSkills");
let inpPrice = document.querySelector("#inpPrice");
let btnCreate = document.querySelector("#btnCreate");
let form = document.querySelector("form");

const API = "http://localhost:8001/profiles";

//! Навешиваем событие сабмит на тег форм, для того, чтобы собрать значение инпутов в один объект и отправить их в db.json
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    !inpName.value.trim() ||
    !inpImg.value.trim() ||
    !inpNumber.value.trim() ||
    !inpSkills.value.trim() ||
    !inpPrice.value.trim()
  ) {
    alert("Заполните все поля!!!");
    return;
  }

  // Создаем новый объект и туда добавляем значение наших инпутов
  let newProfile = {
    name: inpName.value,
    img: inpImg.value,
    number: inpNumber.value,
    skills: inpSkills.value,
    price: inpPrice.value,
  };
  createProfile(newProfile);
});
//! CREATE - create new datas
async function createProfile(objProf) {
  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(objProf),
  });
  let inputs = document.querySelectorAll("form input");
  inputs.forEach((e) => {
    e.value = "";
  });
}
