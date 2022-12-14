const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", onChangeTextTitleArea);

function onChangeTextTitleArea(event) {
  nameOutput.textContent = event.currentTarget.value;
  const correctValue = event.currentTarget.value.trim();
  if (correctValue === "") {
    nameOutput.textContent = "Anonymous";
  }
}
