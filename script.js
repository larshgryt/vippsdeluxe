

var xSend = document.getElementById("send");
var xReceive = document.getElementById("receive");
var xHistory = document.getElementById("history");
var buttonNavDiv = document.getElementById("navbuttonsdiv");
var searchBar = document.getElementById("searchbar");
var sendifo_form = document.getElementById("sendifo_form");
var topnav_button_left = document.getElementById("topnav_button_left");
var topnav_button_right = document.getElementById("topnav_button_right");

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
    sendifo_form.style.display = "block";
    xSend.style.display = "none";
    topnav_button_left.innerHTML = "X";
    topnav_button_right.innerHTML = "&gt";

}



