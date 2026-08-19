let mess = document.querySelector("#message");
let count = document.querySelector("#counter");

mess.addEventListener("input", function() {
    count.textContent = `Characters: ${mess.value.length}`;
    
})