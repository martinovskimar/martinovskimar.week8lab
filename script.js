function rock() {
    var random = Math.floor(Math.random() * 3);
    //0 = rock; 1 = paper; 2 = scissors
    if(random == 0) {
        document.getElementById("placeholder").innerHTML="Draw, computer chose rock too";
    }
    else if(random == 1) {
        document.getElementById("placeholder").innerHTML="Lose, computer chose paper";
    }
    else {
        document.getElementById("placeholder").innerHTML="Win, computer chose scissors";
    }
}
function paper() {
    var random = Math.floor(Math.random() * 3);
    if(random == 0) {
        document.getElementById("placeholder").innerHTML="Win, computer chose rock";
    }
    else if(random == 1) {
        document.getElementById("placeholder").innerHTML="Draw, computer chose paper too";
    }
    else {
        document.getElementById("placeholder").innerHTML="Lose, computer chose scissors";
    }
}
function scissors() {
    var random = Math.floor(Math.random() * 3);
    if(random == 0) {
        document.getElementById("placeholder").innerHTML="Lose, computer chose rock";
    }
    else if(random == 1) {
        document.getElementById("placeholder").innerHTML="Win, computer chose paper";
    }
    else {
        document.getElementById("placeholder").innerHTML="Draw, computer chose scissors too";
    }
}