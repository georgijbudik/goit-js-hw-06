const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");

inputEl.addEventListener("input", (event) => {
  spanEl.textContent = event.currentTarget.value;
  inputEl.trim;
});
