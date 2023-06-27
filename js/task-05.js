const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");

inputEl.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value;
  if (inputValue.trim() !== "") {
    spanEl.textContent = inputValue;
  } else {
    spanEl.textContent = "Anonymous";
  }
});
