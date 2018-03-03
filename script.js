
var xhr = new XMLHttpRequest();

var send = document.getElementById("send");
var receive = document.getElementById("receive");
var history = document.getElementById("history");
var buttonNavDiv = document.getElementById("navbuttonsdiv");
var searchBar = document.getElementById("searchbar");
var sendifo_form = document.getElementById("sendifo_form");
var topnav_button_left = document.getElementById("topnav_button_left");
var topnav_button_right = document.getElementById("topnav_button_right");
var preview = document.getElementById("preview");
var output_from_name = document.getElementById("output_from_name");
var output_name = document.getElementById("output_name");
var output_city = document.getElementById("output_city");
var output_zip = document.getElementById("output_zip");
var output_amount= document.getElementById("output_amount");
var output_street = document.getElementById("output_street");
var output_message = document.getElementById("output_message");
var sendbtn = document.getElementById("sendbtn")
var receivebtn = document.getElementById("receivebtn")
var histbtn = document.getElementById("histbtn")
var fileUpload = document.getElementById("scan_button")

sendbtn.style.borderBottom = "solid"
sendbtn.style.borderBottomWidth = "2px";
sendbtn.style.borderBottomColor= "#ffffff";
sendbtn.style.color = "#ffffff";

//Button click changes the content (3 buttons)
function sendPage() {
    sendbtn.style.borderBottom = "solid"
    sendbtn.style.borderBottomWidth = "2px";
    sendbtn.style.borderBottomColor= "#ffffff";
    sendbtn.style.color = "#ffffff";
    receivebtn.style.color = "#B2D8D8";
    histbtn.style.color = "#B2D8D8";
    receivebtn.style.borderBottom = "none";
    histbtn.style.borderBottom = "none";
    send.style.display = "block";
    receive.style.display = "none";
    buttonNavDiv.style.display = "block";
    searchBar.style.display = "block";
    sendifo_form.style.display = "none";
    history.style.display = "none";
}

function receivePage() {
    receivebtn.style.borderBottom = "solid";
    receivebtn.style.borderBottomWidth = "2px";
    receivebtn.style.borderBottomColor= "#ffffff";
    receivebtn.style.color = "#ffffff";
    sendbtn.style.color = "#B2D8D8";
    histbtn.style.color = "#B2D8D8";
    sendbtn.style.borderBottom = "none";
    histbtn.style.borderBottom = "none";
    send.style.display = "none";
    receive.style.display = "block";
    buttonNavDiv.style.display = "block";
    searchBar.style.display = "none";
    history.style.display = "none";
    sendifo_form.style.display = "none";
}

function historyPage() {
    histbtn.style.borderBottom = "solid";
    histbtn.style.borderBottomWidth = "2px";
    histbtn.style.borderBottomColor= "#ffffff";
    histbtn.style.color = "#ffffff";
    sendbtn.style.color = "#B2D8D8";
    receivebtn.style.color = "#B2D8D8";
    sendbtn.style.borderBottom = "none";
    receivebtn.style.borderBottom = "none";
    send.style.display = "none";
    receive.style.display = "none";
    buttonNavDiv.style.display = "block";
    searchBar.style.display = "none";
    history.style.display = "block";
    sendifo_form.style.display = "none";
}

//When choosing a user to receive gift, enters "send mode"
function chooseUser() {

    xhr.open("GET", "https://dnbapistore.com/hackathon/customers/3.0/customer/01011900123", true);
    xhr.setRequestHeader('Authorization', "Bearer 3274443e-de83-39b3-8087-2f17fe4e02ea");

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
        preview.style.display = "none";
        searchBar.style.display = "block";
        topnav_button_left.innerHTML = "&lt";
        topnav_button_right.style.display = "none";
	}
    else if(topnav_button_left.innerHTML == "&lt;") {
        preview.style.display = "none";
        sendifo_form.style.display = "block";
        topnav_button_left.innerHTML = "X";
        topnav_button_right.style.display = "block";
    }
}

function makePreview() {
    var amount = document.getElementById("input_amount").value;
    var message = document.getElementById("input_message").value;
    var street = document.getElementById("input_address_street").value;
    var city = document.getElementById("input_address_city").value;
    var zip = document.getElementById("input_address_code").value;
    
    output_message.innerHTML = message;
    output_street.innerHTML = street;
    output_amount.innerHTML = amount;
    output_zip.innerHTML = zip;
    output_city.innerHTML = city;

    topnav_button_left.innerHTML = "&lt";
    topnav_button_right.style.display = "none";

    sendifo_form.style.display = "none";
    preview.style.display = "block";
}

function sendGift(amount, image) {
    
}


document.getElementById("showImgCompare").onclick = function() {
    document.getElementById("canvas").style.visibility = "visible";

}

document.getElementById("upload_image").onclick = function() {
    document.getElementById("fileInput1").click();
}

document.getElementById("scan_button").onclick = function() {
    document.getElementById("fileInput2").click();
}




