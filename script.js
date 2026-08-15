let a = document.querySelector("#a");
let h2 = document.querySelector("h2");

a.addEventListener("mouseover", function() {
    h2.style.backgroundColor = "rgb(17, 94, 90)";
    h2.style.fontSize = "30px"
});

a.addEventListener("mouseout", function() {
    h2.style.backgroundColor = "rgb(32, 169, 162)";
    h2.style.fontSize = "25px"
});