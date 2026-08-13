let h3 = document.querySelector("h3");
let slt = document.querySelector("select");

slt.addEventListener("change", function(val) {
    console.log(val.target.value);
    h3.textContent = `${val.target.value} Device selected :`
});