const input = document.querySelector("input");
const textInputArea = document.querySelector("#validation-input");

const valueDataLength = textInputArea.getAttribute("data-length");

input.addEventListener("blur", checkCorrectFill);

function checkCorrectFill(e) {
  if (Number(valueDataLength) === e.currentTarget.value.length) {
    textInputArea.classList.add("valid");
    textInputArea.classList.remove("invalid");
  } else {
    textInputArea.classList.remove("invalid");
    textInputArea.classList.add("invalid");
  }
}
