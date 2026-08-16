let nm = document.querySelector("#name");
let form = document.querySelector("form");
let mail = document.querySelector("#mail")

form.addEventListener("submit", function(det) {
    det.preventDefault();
    if (nm.value.length <= 2) {
        document.querySelector("#hide").style.display = "initial"
    }
    else{
        document.querySelector("#hide").style.display = "none"
    }
});