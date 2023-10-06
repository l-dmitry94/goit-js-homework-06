const counter = document.querySelector("#counter");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let currentValue = 0;

incrementBtn.addEventListener("click", onIncrement);
decrementBtn.addEventListener("click", onDecrement);

function onIncrement() {
    currentValue += 1;
    value.textContent = currentValue;
}

function onDecrement() {
    if(currentValue <= 0) {
        return;
    }
    currentValue -= 1;
    value.textContent = currentValue;
}
