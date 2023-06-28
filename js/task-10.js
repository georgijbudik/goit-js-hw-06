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

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
const min = Number(input.min);
const max = Number(input.max);
const step = Number(input.step);

function createBoxes() {
  const amount = Number(input.value);
  if (amount > max || amount < min) {
    alert("Please enter a number between 1 and 100");
    return;
  }
  const boxes = [];
  let boxSize = 30;

  for (let i = min; i <= amount; i += step) {
    const box = document.createElement("div");
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    boxSize += 10;
  }
  boxesDiv.append(...boxes);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
  input.value = "";
}
