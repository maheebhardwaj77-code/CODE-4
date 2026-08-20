let form = document.querySelector("#form");

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");

let nameError = document.querySelector("#nameError");
let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");
let confirmError = document.querySelector("#confirmError");

let success = document.querySelector("#success");


// Email Regex
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password Regex
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Pehle errors clear karo
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    success.textContent = "";

    let isValid = true;


    // Name validation
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }


    // Email validation
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false;

    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }


    // Password validation
    if (password.value === "") {
        passwordError.textContent = "Password is required";
        isValid = false;

    } else if (!passwordRegex.test(password.value)) {
        passwordError.textContent =
            "Password must contain uppercase, lowercase, number and special character";
        isValid = false;
    }


    // Confirm password validation
    if (confirmPassword.value === "") {
        confirmError.textContent = "Please confirm your password";
        isValid = false;

    } else if (confirmPassword.value !== password.value) {
        confirmError.textContent = "Passwords do not match";
        isValid = false;
    }


    // Final result
    if (isValid) {
        success.textContent = "Registration successful!";
    }

});