function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.getElementById("boxes");
createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxSize = 30;
  let markup = "";

  for (let i = 0; i < amount; i += 1) {
    const size = boxSize + i * 10;
    const color = getRandomHexColor();
    markup += `<div style="width: ${size}px;
    height: ${size}px;
    background-color: ${color};
    margin-bottom: 10px;"></div>`;
  }

  boxesDiv.innerHTML = markup;
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
  input.value = "";
}
