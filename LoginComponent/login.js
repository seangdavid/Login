const showPassword = document.getElementById("showPassword");
const hidePassword = document.getElementById("hidePassword");
const password = document.getElementById("password");

showPassword.addEventListener("click", toggleIcon);
hidePassword.addEventListener("click", toggleIcon);

function toggleIcon() {
  if (password.type === "password") {
    password.type = "text";
    hidePassword.style.display = "none";
    showPassword.style.display = "block";
  } else {
    password.type = "password";
    hidePassword.style.display = "block";
    showPassword.style.display = "none";
  }
}
const regiShowPassword = document.getElementById("regi-showPassword");
const regiHidePassword = document.getElementById("regi-hidePassword");
const regiPassword = document.getElementById("regi-password");

regiShowPassword.addEventListener("click", toggleIcon2);
regiHidePassword.addEventListener("click", toggleIcon2);

function toggleIcon2() {
  if (regiPassword.type === "password") {
    regiPassword.type = "text";
    regiHidePassword.style.display = "none";
    regiShowPassword.style.display = "block";
  } else {
    regiPassword.type = "password";
    regiHidePassword.style.display = "block";
    regiShowPassword.style.display = "none";
  }
}
const registerBtn = document.getElementById("registerBtn");
const login = document.getElementById("login");
const register = document.getElementById("register");

registerBtn.addEventListener("click", toggleLogin);

function toggleLogin() {
  if (login.style.display === "none") {
    login.style.display = "flex";
    register.style.display = "none";
  } else {
    login.style.display = "none";
    register.style.display = "flex";
  }
}
function clearForm() {
  document.getElementById("login-form").reset();
  document.getElementById("register-form").reset();
}
