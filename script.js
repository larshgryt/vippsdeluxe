
var xhr = new XMLHttpRequest();

var send = document.getElementById("send");
var receive = document.getElementById("receive");
var gifthistory = document.getElementById("gifthistory");
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
var sendbtn = document.getElementById("sendbtn");
var receivebtn = document.getElementById("receivebtn");
var histbtn = document.getElementById("histbtn");
var fileUpload = document.getElementById("scan_button");
var mainContent = document.getElementById("maincontent");
var titleText = document.getElementById("topnavcontent");
var report_text = document.getElementById("scan_feedback");

sendbtn.style.borderBottom = "solid";
sendbtn.style.borderBottomWidth = "2px";
sendbtn.style.borderBottomColor= "#ffffff";
sendbtn.style.color = "#ffffff";

//Button click changes the content (3 buttons)
function sendPage() {
    sendbtn.style.borderBottom = "solid";
    sendbtn.style.borderBottomWidth = "2px";
    sendbtn.style.borderBottomColor= "#ffffff";
    sendbtn.style.color = "#ffffff";
    receivebtn.style.color = "#B2D8D8";
    histbtn.style.color = "#B2D8D8";
    receivebtn.style.borderBottom = "none";
    histbtn.style.borderBottom = "none";
    gift_sent.style.display = "none";
    giftOK.style.display = "none";
    giftText.style.display = "none";
    send.style.display = "block";
    receive.style.display = "none";
    buttonNavDiv.style.display = "block";
    searchBar.style.display = "block";
    sendifo_form.style.display = "none";
    gifthistory.style.display = "none";
    
}

function receivePage() {
    mainContent.style.height = "550px";
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
    gifthistory.style.display = "none";
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
    gifthistory.style.display = "block";
    searchBar.style.display = "block";
    sendifo_form.style.display = "none";
    empty_history_list.style.display = "block";
}
function sendGift(){
    send.style.display = "none";
    buttonNavDiv.style.display = "none";
    searchBar.style.display = "none";
    preview.style.display = "none";
    gift_sent.style.display = "block";
    giftText.style.display = "block";
    giftOK.style.display = "block";
}


//When choosing a user to receive gift, enters "send mode"
function chooseUser() {

    xhr.open("GET", "https://dnbapistore.com/hackathon/customers/3.0/customer/01011900123", true);
    xhr.setRequestHeader('Authorization', "Bearer 3274443e-de83-39b3-8087-2f17fe4e02ea");
    
    titleText.innerHTML = "Create card";
    mainContent.style.height = "550px";
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
        mainContent.style.height = "550px";
        titleText.innerHTML = "Gift Cards";
        sendifo_form.style.display = "none";
        send.style.display = "block";
        buttonNavDiv.style.display = "block";
        preview.style.display = "none";
        searchBar.style.display = "block";
        topnav_button_left.innerHTML = "&lt";
        topnav_button_right.style.display = "none";
	}
    else if(topnav_button_left.innerHTML == "&lt;") {
        mainContent.style.height = "550px";
        titleText.innerHTML = "Create Card";
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
    
    
    mainContent.style.height = "550px";
    
    titleText.innerHTML = "Card preview";
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



document.getElementById("showImgCompare").onclick = function() {
    document.getElementById("canvas").style.visibility = "visible";

}

document.getElementById("upload_image").onclick = function() {
    document.getElementById("fileInput1").click();
}

document.getElementById("scan_button").onclick = function() {
    document.getElementById("fileInput2").click();
}

var cardChecker = false;

image_compare_callback = function(x) {
    if(x <= 30 && cardChecker == false) {
        report_text.innerHTML = "Yay, you get money.";
        cardChecker = true;
    }
    else if(cardChecker == true) {
        report_text.innerHTML = "Card already cashed.";
    }
    else {
        report_text.innerHTML = "No match, no money.";
    }
}




