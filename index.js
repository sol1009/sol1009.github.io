const loginForm = document.querySelector("#input-user");
const loginInput = document.querySelector("#input-user input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "userName"





function handleLogin(e) {
    e.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    location.replace('html/mian.html');
    greeting.innerText = `Hello ${userName}`;
}






loginForm.addEventListener("submit", handleLogin);

