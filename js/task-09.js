const bodyRef = document.querySelector("body");
const btnRef = document.querySelector(".change-color");
const nameColorRef = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = event => {
  const color = getRandomHexColor();
  bodyRef.style.background = color;
  nameColorRef.textContent = color;
};

btnRef.addEventListener("click", changeColor);
