let toDoApp = document.getElementById("to-do-app");
let text1 = document.getElementById("text");
let shoppingList = document.getElementById("shopping-list");
let przycisk1 = document.getElementById("add");
let przycisk2 = document.getElementById("delete");
let przycisk3 = document.getElementById("switch");
let body = document.querySelector("body");

przycisk1.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(text1.value);

  const newItem = document.createElement("li");
  newItem.textContent = text1.value;
  shoppingList.appendChild(newItem);

  if (text1.value.trim() === "") {
    alert("Wpisz produkt");
    return;
  }
});

przycisk2.addEventListener("click", function () {
  const ostatni = shoppingList.lastElementChild;

  if (ostatni) {
    ostatni.remove();
  }
});

przycisk3.addEventListener("click", function () {
  body.classList.toggle("black");
});
