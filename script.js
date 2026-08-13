let input = document.querySelector("input");

input.addEventListener("input", function(val) {
    if(val.data !== " " && val.data !== null) {
        console.log(val.data);
    } 
});