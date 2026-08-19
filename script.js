let inp = document.querySelector("#password");
let btn = document.querySelector("#toggle");

btn.addEventListener("click", function() {
    if(inp.type === "password") {
        inp.setAttribute("type", "text");
        btn.textContent = "Hide";
    } else {
        inp.setAttribute("type", "password");
        btn.textContent = "Show";
    };
});