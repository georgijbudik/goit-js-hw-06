const rangeInput = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

rangeInput.addEventListener("input", () => {
  const fontSize = rangeInput.value;

  textSpan.style.fontSize = `${fontSize}px`;
});
