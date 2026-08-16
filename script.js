let form = document.querySelector("#loginForm")
let email = document.querySelector("#email")
let pass = document.querySelector("#password")

form.addEventListener("submit", function(det) {
    det.preventDefault();

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passans = passwordRegex.test(pass.value);

    let isValid = true;

    if(!emailans) {
        document.querySelector("#emailError").textContent = "Invalid Email !";
        email.value = "";
        isValid = false;
    }
    else {
        document.querySelector("#emailError").textContent = "";
    };

    if(!passans) {
        document.querySelector("#passwordError").textContent = "Invalid Password !";
        pass.value = "";
        isValid = false;
    }
    else {
        document.querySelector("#passwordError").textContent = "";
    };

    if(isValid) {
        document.querySelector("#successMessage").textContent = "Everything is Correct";
    }
    else {
        document.querySelector("#successMessage").textContent = "";
    };
})