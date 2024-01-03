var car1 = document.getElementById("car1")
var car2 = document.getElementById("car2")

var posXCar1 = 0
var posXCar2 = 0
const SPEED = 10
var isRunning = false;

let fuel1 = 1170;
let fuel2 = 1170;

document.addEventListener("keydown", function (e) {
    if (isRunning) {
        switch (e['key']) {
            case 'ArrowRight':
                moveCar1();
                break;
            case 'd':
                moveCar2();
                break;

        }
    }
})

function moveCar1() {
    posXCar1 += SPEED
    car1.style.marginLeft = posXCar1 + "px";
    fuel1 -= 10;

}

function moveCar2() {
    posXCar2 += SPEED
    car2.style.marginLeft = posXCar2 + "px";
    fuel2 -= 10;

}

function start() {
    changeRed()
}


function changeRed() {
    var red = document.getElementById("red")
    red.style.backgroundColor = 'red'
    setTimeout(
        changeYellow,
        1000);
}

function changeYellow() {
    var yellow = document.getElementById("yellow")
    yellow.style.backgroundColor = 'yellow'
    setTimeout(
        changeGreen,
        1000);
}

function changeGreen() {
    var green = document.getElementById("green")
    green.style.backgroundColor = 'green'

    isRunning = true
}

function checkWin() {
    if (fuel1 <= 0) {
        alert("Chiến thắng thuộc về car1!");
    } else if (fuel2 <= 0) {
        alert("Chiến thắng thuộc về car2!");
    }
}
setInterval(checkWin, 1000);