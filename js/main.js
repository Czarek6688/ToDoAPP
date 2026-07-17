let toDoApp = document.getElementById("to-do-app");
let text1 = document.getElementById("text");
let shoppingList = document.getElementById("shopping-list");

toDoApp.addEventListener("submit", function (event) {
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
