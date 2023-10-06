const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", onInput);

function onInput() {
    const valueInput = nameInput.value;

    if (valueInput === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = valueInput;
    }
}


