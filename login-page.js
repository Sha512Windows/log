const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Wetland" && password === "caleb") {
        alert("You have successfully logged in.");
        window.top.location.href = 'https://UC7D4XLWI2N8BvrDCFbZB6oA.gitub.io';

    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
