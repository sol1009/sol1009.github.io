const clock = document.querySelector(".time");
const randomBg = document.querySelector(".random-bg");
const logOut = document.querySelector("#logOut");
const quotes = ['넌 너만의 지도를 만들어야지', '그래, 넌 미쳤어. 이건 비밀인데.. 멋진 사람들은 다 미쳤단다!', '과거를 바꿀 순 없지만 교훈은 얻을 수 있지', '바로 그게 문제야. 넌 그렇게 생각하지 않는다면 말을 하지 말았어야 해', '모든 모험은 첫걸음을 필요로하지', '불가능 한 것을 이루는 유일한 방법은 가능하다고 믿는 거야',
    '가장 예쁜 꽃이 언제나 가장 멀리 있잖아', '내 문제점은 그거야. 스스로 자신에게 좋은 충고를 해주지만 거의 따르지 않는다는 것', '내 기분은 내가 정해. 오늘의 나는 "행복" 으로 할래', '어제 이야기는 아무 의미가 없어요. 왜냐하면 지금의 난 어제의 내가 아니거든요.', '남에게 보이는 대로인 사람이 되라']

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
const quotesMatch = quotes[`${randomNum - 1}`];
randomBg.innerHTML = `<img src='..//img/${randomNum}.png'>`;
randomBg.innerHTML += `<span>${quotesMatch}</span>`;




function handleLogOut() {
    window.localStorage.removeItem("userName");
    location.replace('../index.html');
}

logOut.addEventListener("click", handleLogOut);

// localStorage.getItem("userName");

const savedUsername = localStorage.getItem("userName");
if (savedUsername === null) {
    location.replace('index.html');
} else {
    greeting.innerText = `Hello ${savedUsername}`;
}