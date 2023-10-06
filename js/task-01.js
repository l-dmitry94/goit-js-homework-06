const categoriesList = document.querySelector("#categories");
const categoriesItem = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItem.length}`);
console.log("")

categoriesItem.forEach(item => {
    const categoryTitle = item.querySelector("h2").textContent;
    const categoryItems = item.querySelectorAll("li").length
    console.log(`Category: ${categoryTitle}`)
    console.log(`Elements: ${categoryItems}`)
    console.log("")
})