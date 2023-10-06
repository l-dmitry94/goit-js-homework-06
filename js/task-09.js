const body = document.querySelector("body")
const color = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", function () {
    color.textContent = getRandomHexColor();
    body.style.backgroundColor = color.textContent;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
