var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");


setGradient();
function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";"
}

function randomColor(){
    body.style.background = "linear-gradient(to right, rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + "), " + "rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + "))";
}

function randomNumber(){
    return Math.floor((Math.random() * 255) + 0);
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomColor);

// xdddd