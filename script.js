let body = document.querySelector("body")
let btn = document.querySelector("button")

function setDarkOrLight() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        body.classList.add("dark")
        body.classList.remove("light")
    } else {
        body.classList.add("light")
        body.classList.remove("dark")
    }
}

setDarkOrLight();

btn.addEventListener("click", function() {
    if(body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
    }
    else {
        body.classList.remove("light")
        body.classList.add("dark")
    }
})

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function() {
    setDarkOrLight();
})