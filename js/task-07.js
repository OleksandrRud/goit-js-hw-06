const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", element => {
  const valInput = element.target.value;

  text.style.fontSize = `${valInput}px`;
});
