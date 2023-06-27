const rangeInput = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");
textSpan.style.fontSize = rangeInput.value + "px";

rangeInput.addEventListener("input", () => {
  textSpan.style.fontSize = rangeInput.value + "px";
});
