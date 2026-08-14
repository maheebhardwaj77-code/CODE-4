let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#file");

btn.addEventListener("click", function() {
    fileinp.click();
});

fileinp.addEventListener("change", function (val) {
    btn.textContent = val.target.files[0].name;
});