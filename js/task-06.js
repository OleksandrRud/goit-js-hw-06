const input = document.querySelector("input");
const textInputArea = document.querySelector("#validation-input");

const valueDataLength = textInputArea.getAttribute(["data-length"]);

input.addEventListener("blur", checkCorrectFill);

function checkCorrectFill(e) {
  console.log(e.currentTarget);
  if (Number(valueDataLength) === e.currentTarget.value.length) {
    changeClass("valid", "invalid");
  } else {
    changeClass("invalid", "valid");
  }
}
const changeClass = (addClass, removeClass) => {
  textInputArea.classList.add(addClass);
  textInputArea.classList.remove(removeClass);
};
