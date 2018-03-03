

var xSend = document.getElementById("send");
var xReceive = document.getElementById("receive");
var xHistory = document.getElementById("history");
var buttonNavDiv = document.getElementById("navbuttonsdiv");

function sendPage() {
    xSend.style.display = "block";
    xReceive.style.display = "none";
    xHistory.style.display = "none";
    buttonNavDiv.style.display = "block";
}

function receivePage() {
    xSend.style.display = "none";
    xReceive.style.display = "block";
    xHistory.style.display = "none";
    buttonNavDiv.style.display = "block";
}

function historyPage() {
    xSend.style.display = "none";
    xReceive.style.display = "none";
    xHistory.style.display = "block";
    buttonNavDiv.style.display = "block";
}

function chooseUser() {
    buttonNavDiv.style.display = "none";
}



