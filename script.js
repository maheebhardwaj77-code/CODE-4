let btn = document.querySelector("#changeColor");
let colorName = document.querySelector("#colorName");

let colors = ["red", "blue", "green", "yellow", "purple"];

btn.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomIndex];
    colorName.textContent = colors[randomIndex];
});