const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", () => {
  const expectedLength = inputEl.getAttribute("data-length");
  const value = inputEl.value;
  if (value.length == expectedLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
    inputEl.trim();
  }
});
