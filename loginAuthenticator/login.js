const registerEmail = document.getElementById("registerEmail");
registerEmail.addEventListener("change", () => {
    const valueEmail = document.getElementById("registerEmail").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(valueEmail.match(emailRegex)) {
        emailValue = true;
    }
    else {
        alert("email not accepted");
    }
});
const registerPassword = document.getElementById("registerPassword");
registerPassword.addEventListener("change", () => {
    const valuePassword = document.getElementById("registerPassword").value;
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(valuePassword.match(strongRegex)) {
        passwordValue = true;
    }
    else {
        alert("password not accepted");
    }
});
const registerButton = document.getElementById("registerButton");
registerButton.addEventListener('click', () => {
    if(emailValue && passwordValue == true) {

    }
    else {
        alert("youre email or password dont complies with our guidelines");
    }
});