const formEl = document.querySelector(".login-form");
const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.target;
  if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля!");
    return;
  }
  const userData = {
    email: email.value,
    password: password.value
  };
  event.target.reset();
  console.log(userData);
};

formEl.addEventListener("submit", handleSubmit);
