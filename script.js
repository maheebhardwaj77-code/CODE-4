const bulb = document.getElementById("bulb");
const btn = document.getElementById("btn");

let isOn = false;

btn.addEventListener("click", function () {

    if (isOn === false) {
        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        btn.innerText = "Turn OFF";
        isOn = true;
    } else {
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        btn.innerText = "Turn ON";
        isOn = false;
    }

});

console.log("hello dosto")