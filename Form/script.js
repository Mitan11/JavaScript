console.log("Hello");

const uName = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const moblie = document.getElementById("moblie");

const uerError = document.getElementById("uname");
const emailError = document.getElementById("uemail");
const passError = document.getElementById("pass");
const moblieError = document.getElementById("tel");
function valid(iField) {
    
    switch (iField) {
        case 1:
            if (uName.value === "") {
                uerError.style.display = "block";
                uerError.innerText = "Username Required";
            }
            else {
                uerError.style.display = "none";
            }
            break;
        case 2:
            if (email.value === "") {
                emailError.style.display = "block";
                emailError.innerText = "Email Address Required";
            }
            else {
                emailError.style.display = "none";
            }
            break;
        case 3:
            if (pass.value === "") {
                passError.style.display = "block";
                passError.innerText = "Password Required";
            }
            else {
                passError.style.display = "none";
            }
            break;
        case 4:
            if (moblie.value === "") {
                moblieError.style.display = "block";
                moblieError.innerText = "Moblie Number Required";
            }
            else {
                moblieError.style.display = "none";
            }
            break;
        default:
            console.log();
    }

}