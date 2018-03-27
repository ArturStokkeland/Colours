let boxFill = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let boxFillAmount = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let boxRequiredFill = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
let boxesFilledPerBoxFill = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let boxesFilled = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function fillColour() {
    boxFill[0] += boxFillAmount[0];
    
    if (boxFill[0] >= boxRequiredFill[0]) {
        //alert(boxfill[0] + " " + box);
        fillMoreBoxes(0);
    }
    else {
        document.getElementById("colour0").style.width = boxFill[0] / boxRequiredFill[0] * 100 + "%";
    }
    
}

function fillMoreBoxes(box) {
    
    boxFill[box] -= boxRequiredFill[box];
    document.getElementById("colour" + box).style.width = boxFill[box] / boxRequiredFill[box] * 100 + "%";
    boxesFilled[box] += boxesFilledPerBoxFill[box];
    
    boxFill[box + 1] += boxFillAmount[box + 1];
    if (boxFill[box + 1] >= boxRequiredFill[box + 1] && box + 1 != 11) {
        fillMoreBoxes(box + 1);
    }
    else {
        document.getElementById("colour" + (box + 1)).style.width = boxFill[box + 1] / boxRequiredFill[box + 1] * 100 + "%";
    }
    
}
