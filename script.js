

var xSend = document.getElementById(send);
var xReceive = document.getElementById(receive);
var xHistory = document.getElementById(history);

function sendPage() {
    xSend.style.display = "block";
    xReceive.style.display = "none";
    xHistory.style.display = "none";
}

function receivePage() {
    xSend.style.display = "none";
    xReceive.style.display = "block";
    xHistory.style.display = "none";
}

function historyPage() {
    xSend.style.display = "none";
    xReceive.style.display = "none";
    xHistory.style.display = "block";
}

function chooseUser() {
    
}



