let main = document.querySelector("#main")
let form = document.querySelector("form");
let input = document.querySelectorAll("input")

form.addEventListener("submit", function(det) {
    det.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", input[0].value);
    profile.appendChild(img);
    card.appendChild(profile)

    let h2 = document.createElement("h2");
    h2.textContent = input[1].value;
    card.appendChild(h2);

    let h4 = document.createElement("h4");
    h4.textContent = input[2].value;
    card.appendChild(h4)

    let h5 = document.createElement("h5");
    h5.textContent = input[3].value;
    card.appendChild(h5);

    main.appendChild(card);

    console.log(card)
});