const itemEl = document.querySelectorAll("#categories .item");
console.log(`Number of categories:`, itemEl.length);

const partEl = itemEl.forEach(function(element) {
  console.log(`Category:`, element.firstElementChild.textContent);

  const elementsInCategory = element.lastElementChild;
  console.log(`Elements:`, elementsInCategory.children.length);
});
