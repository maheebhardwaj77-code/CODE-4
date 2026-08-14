let main = document.querySelector("#main");
let form = document.querySelector("form");
let input = document.querySelectorAll("input");

form.addEventListener("submit", function(det) {
    det.preventDefault();
    
    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", input[0].value);
    profile.appendChild(img);
    card.appendChild(profile);

    let h2 = document.createElement("h2");
    h2.textContent = input[1].value;
    card.appendChild(h2);

    let h3 = document.createElement("h3");
    h3.textContent = input[2].value;
    card.appendChild(h3);

    let p = document.createElement("p")
    p.textContent = input[3].value;
    card.appendChild(p);

    main.appendChild(card);

    input.forEach(function(val) {
        if (val.type !== "submit") {
            val.value = "";
        }
    });
});
