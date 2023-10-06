const inputValidation = document.querySelector("#validation-input");
const inputLength = Number(inputValidation.dataset.length);

inputValidation.addEventListener("blur", onInput);

function onInput () {
    if(inputValidation.value.length === inputLength) {
        inputValidation.classList.remove("invalid");
        inputValidation.classList.add("valid");
    }

    else {
        inputValidation.classList.remove("valid");
        inputValidation.classList.add("invalid");
    }
}