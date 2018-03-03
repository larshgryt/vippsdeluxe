

var xSend = document.getElementById("send");
var xReceive = document.getElementById("receive");
var xHistory = document.getElementById("history");
var buttonNavDiv = document.getElementById("navbuttonsdiv");
var searchBar = document.getElementById("searchbar");

function sendPage() {
    xSend.style.display = "block";
    xReceive.style.display = "none";
    xHistory.style.display = "none";
    buttonNavDiv.style.display = "block";
    searchBar.style.display = "block";
}

function receivePage() {
    xSend.style.display = "none";
    xReceive.style.display = "block";
    xHistory.style.display = "none";
    buttonNavDiv.style.display = "block";
    searchBar.style.display = "none"
}

function historyPage() {
    xSend.style.display = "none";
    xReceive.style.display = "none";
    xHistory.style.display = "block";
    buttonNavDiv.style.display = "block";
    searchBar.style.display = "none";
}

function chooseUser() {
    buttonNavDiv.style.display = "none";
    searchBar.style.display = "none"
}



