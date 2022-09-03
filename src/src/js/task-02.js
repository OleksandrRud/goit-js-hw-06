const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments"
];
const products = [];
ingredients.map(ingredient => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  products.push(element);
});

const listEl = document.querySelector("#ingredients");
listEl.append(...products);
