const { createElement } = require("react");

let timer = document.querySelector("#timer");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let count = 10
let tm1;

start.addEventListener("click", function() {
    tm1 = setInterval(() => {
        count--;
        timer.textContent = count;
        document.createElement("h4");

        if(count <= 0) {
            clearInterval(tm1);
        }
    }, 1000);
});

stop.addEventListener("click", function() {
    clearInterval(tm1);
});

reset.addEventListener("click", function() {
    clearInterval(tm1);
    count = 10;
    timer.textContent = 10;
});