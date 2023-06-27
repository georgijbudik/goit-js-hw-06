const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", () => {
  const expectedLength = Number(inputEl.getAttribute("data-length"));
  const value = inputEl.value.trim().length;
  if (value === expectedLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
