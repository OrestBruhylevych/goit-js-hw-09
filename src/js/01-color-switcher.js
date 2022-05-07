
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector("body")
};
let intervalId = 0;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);
refs.stopBtn.setAttribute("disabled", "disabled");



function onStartBtnClick() {
    intervalId = setInterval(() => chengeBgColorBody(), 1000);
    refs.startBtn.setAttribute("disabled", "disabled");
    refs.stopBtn.removeAttribute("disabled");
}

function onStopBtnClick() { 
    refs.startBtn.removeAttribute("disabled");
    clearInterval(intervalId);
    refs.stopBtn.setAttribute("disabled", "disabled");
}

function chengeBgColorBody() {
    const hex = getRandomHexColor();
    refs.body.style.backgroundColor = hex;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}