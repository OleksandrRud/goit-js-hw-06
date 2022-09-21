let counterValue = 0;
const writeValue = document.querySelector("#value");

const incrementValue = document.querySelector('[data-action="increment"]');
const decrementValue = document.querySelector('[data-action="decrement"]');

decrementValue.addEventListener("click", subtractNumber);
incrementValue.addEventListener("click", addNumber);
console.log(decrementValue);

function addNumber() {
  counterValue += 1;
  writeValue.textContent = counterValue;
}
function subtractNumber() {
  counterValue -= 1;
  writeValue.textContent = counterValue;
}
