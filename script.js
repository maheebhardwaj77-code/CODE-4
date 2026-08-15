let inp = document.querySelector("input")
let h2 = document.querySelector("h2 span")

inp.addEventListener("input", function(det) {
    let left = 20 - inp.value.length;
    if(left < 0) {
        h2.textContent = left
        h2.style.color = "red"
    }
    else {
        h2.textContent = left;
        h2.style.color = "white"
    }
});