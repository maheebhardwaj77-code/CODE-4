let mail = document.querySelector("#email");
let pass = document.querySelector("#password");
let form = document.querySelector("#loginForm");
let btn = document.querySelector("button");

form.addEventListener("submit", function(det) {
    det.preventDefault();

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let mailans = emailRegex.test(mail.value);
    let passans = passwordRegex.test(pass.value)

    let isValid = true;

    if(!mailans) {
        document.querySelector("#emailError").textContent = "invalid Email !"
        mail.value = "";
        isValid = false;
    }
    else {
        document.querySelector("#emailError").textContent = ""
    }

    if(!passans) {
        document.querySelector("#passwordError").textContent = "invalid password !"
        pass.value = "";
        isValid = false;
    }
    else {
        document.querySelector("#passwordError").textContent = ""
    }  
    
    if(isValid) {
        document.querySelector("#successMessage").textContent = "Everything is Correct !"
    }
    else {
        document.querySelector("#successMessage").textContent = ""
    }
});