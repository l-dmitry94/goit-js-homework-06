const input = document.querySelector("[type='number']");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
    amount = Number(input.value);

    if(!amount) {
      alert("Please, enter the value");
      return;
    }

    let size = 30;
    let box = "";

    for (let i = 0; i < amount; i += 1) {
        box += `<div style="background-color:${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`;

        size += 10;
    }

    boxes.innerHTML = box;

    input.value = "";
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function destroyBoxes() {
    boxes.innerHTML = "";
}
