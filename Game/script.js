let isgameStarted = false;
let num;
function Enter() {
    num = document.getElementById('inputNumber').value * 1000 * 60;
    let sum = document.getElementById("inputNumber").value = ""
    console.log("minutes:", num / 60000)
}
let date = document.getElementById("date")
date.innerHTML += new Date().toLocaleDateString()
let timer = document.getElementById("timer")
setInterval(() => {
    timer.innerHTML = new Date().toLocaleTimeString()
}, 1000);
let time;
function Start() {
    isgameStarted = true;
    let mosquito = document.getElementById('image')
    time = setInterval(() => {
        var i = Math.floor(Math.random() * 1150)
        var j = Math.floor(Math.random() * 380)
        mosquito.style.marginLeft = i + "px"
        mosquito.style.marginTop = j + "px"
    }, 1000)
    setTimeout(() => {
        clearInterval(time);
        mosquito.style.marginLeft = 0 + "px"
        mosquito.style.marginTop = 0 + "px"
        document.getElementById("over").innerHTML = "Time Out! Game Over!"
        document.getElementById("score").innerText = "Your score is: " + score;
    }, num)
}
let score = 0;
function mosquito() {
    if(isgameStarted){
        score++
    }
}
function Stop() {
    let mosquito = document.getElementById('image')
    setTimeout(() => {
        clearInterval(time)
        mosquito.style.marginLeft = 0 + "px"
        mosquito.style.marginTop = 0 + "px"
        document.getElementById("over").innerHTML = "Time Out! Game Over!"
        document.getElementById("score").innerText = "Your score is: " + score;
    })
}