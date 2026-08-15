let a = document.querySelector("#a");

window.addEventListener("mousemove", function(det) {
    a.style.top = det.clientY + "px";
    a.style.left = det.clientX + "px";
});