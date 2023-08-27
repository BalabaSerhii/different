const boxEl = document.querySelector("#boxes");
const inputEl = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("[data-create]");
const deletBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", inputData);
deletBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const addElement = document.createElement("div");
    addElement.style.width = `${boxSize}px`;
    addElement.style.height = `${boxSize}px`;
    addElement.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    boxEl.append(addElement);
  }
}

let boxSize = 30;

function inputData() {
  const valueNumbInput = inputEl.value;
  destroyBoxes();
  createBoxes(valueNumbInput);
  deletBtn.disabled = false;
}

function destroyBoxes() {
  boxEl.innerHTML = "";
  boxSize = 30;
  deletBtn.disabled = true;
}
