

var send = document.getElementById("send");
var receive = document.getElementById("receive");
var history = document.getElementById("history");
var buttonNavDiv = document.getElementById("navbuttonsdiv");
var searchBar = document.getElementById("searchbar");
var sendifo_form = document.getElementById("sendifo_form");
var topnav_button_left = document.getElementById("topnav_button_left");
var topnav_button_right = document.getElementById("topnav_button_right");
var preview = document.getElementById("preview");



//Button click changes the content (3 buttons)
function sendPage() {
    send.style.display = "block";
    receive.style.display = "none";
    history.style.display = "none";
    buttonNavDiv.style.display = "block";
    searchBar.style.display = "block";
    sendifo_form.style.display = "none";
}

function receivePage() {
    send.style.display = "none";
    receive.style.display = "block";
    history.style.display = "none";
    buttonNavDiv.style.display = "block";
    searchBar.style.display = "none";
    sendifo_form.style.display = "none";
}

function historyPage() {
    send.style.display = "none";
    receive.style.display = "none";
    history.style.display = "block";
    buttonNavDiv.style.display = "block";
    searchBar.style.display = "none";
    sendifo_form.style.display = "none";
}

//When choosing a user to receive gift, enters "send mode"
function chooseUser() {
    send.style.display = "none";
    topnav_button_right.style.display = "block";
    buttonNavDiv.style.display = "none";
    searchBar.style.display = "none";
    sendifo_form.style.display = "block";
    topnav_button_left.innerHTML = "X";
    topnav_button_right.innerHTML = "&gt";
    send.style.display = "none";

}

function backToSendGift(){
	if(topnav_button_left.innerHTML == "X"){
		
	   sendifo_form.style.display = "none";
	   send.style.display = "block";
       buttonNavDiv.style.display = "block";
       searchBar.style.display = "block";
       topnav_button_left.innerHTML = "&lt";
       topnav_button_right.style.display = "none";
	}
    else if(topnav_button_left.innerHTML == "&lt") {
        preview.style.display = "none";
        sendifo_form.style.display = "block";
        topnav_button_left.innerHTML = "X";
    }
}

function makePreview() {
    var amount = document.getElementById("input_amount").value;
    var message = document.getElementById("input_message").value;
    var street = document.getElementById("input_address_street").value;
    var city = document.getElementById("input_address_city").value;
    var zip = document.getElementById("input_address_code").value;
    
    topnav_button_left.innerHTML = "&lt";
    topnav_button_right.style.display = "none";
    sendifo_form.style.display = "none";
    preview.style.display = "block";
}




