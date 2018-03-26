let boxFill = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let boxFillAmount = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let boxRequiredFill = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

function fillColour() {
    boxFill[0] += boxFillAmount[0];
    document.getElementById("colour0").style.width = boxFill[0] / boxRequiredFill[0] * 100 + "%";
}
