let toDoApp = document.getElementById("to-do-app");
let text1 = document.getElementById("text");
let shoppingList = document.getElementById("shopping-list");
let przycisk1 = document.getElementById("add");
let przycisk3 = document.getElementById("switch");
let body = document.querySelector("body");

przycisk1.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(text1.value);

  const newItem = document.createElement("li");
  newItem.textContent = text1.value;
  shoppingList.appendChild(newItem);

  const newCheckBoxElement = document.createElement("input");
  newItem.appendChild(newCheckBoxElement);
  newCheckBoxElement.setAttribute("type", "checkbox");

  newCheckBoxElement.addEventListener("change", function () {
    newItem.classList.toggle("done");
  });

  const deleteItem = document.createElement("button");
  deleteItem.textContent = "Usuń";
  newItem.appendChild(deleteItem);

  deleteItem.addEventListener("click", function () {
    deleteItem.parentElement.remove();
  });

  if (text1.value.trim() === "") {
    alert("Wpisz produkt");
    return;
  }
});

przycisk3.addEventListener("click", function () {
  body.classList.toggle("black");
});
