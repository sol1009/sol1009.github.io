const clock = document.querySelector(".time");
const randomBg = document.querySelector(".random-bg");
const logOut = document.querySelector("#logOut");


function getTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `현재시각 ${hours} : ${minutes} : ${seconds}`;
}

getTime();
setInterval(getTime, 1000);

const randomNum = Math.floor(Math.random() * 11) + 1;
randomBg.innerHTML = `<img src='..//img/${randomNum}.png'>`;

function handleLogOut() {
    window.localStorage.removeItem("userName");
    location.replace('index.html');
}

logOut.addEventListener("click", handleLogOut);

// localStorage.getItem("userName");

const savedUsername = localStorage.getItem("userName");
if (savedUsername === null) {
    location.replace('index.html');
} else {
    greeting.innerText = `Hello ${savedUsername}`;
}