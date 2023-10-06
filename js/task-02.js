const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatoes",
    "Herbs",
    "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const arr = [];

ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item");
    arr.push(li);
});

ingredientsList.append(...arr);
