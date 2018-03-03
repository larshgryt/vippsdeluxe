
var xhr = new XMLHttpRequest();
/*var xSend = document.getElementById(send)
var xReceive = document.getElementById(receive)
var xHistory = document.getElementById(history)

function sendPage() {
    xSend.style.display = "block"
    xReceive.style.display = "none"
    xHistory.style.display = "none"
}

function receivePage() {
    xSend.style.display = "none"
    xReceive.style.display = "block"
    xHistory.style.display = "none"
}

function historyPage() {
    xSend.style.display = "none"
    xReceive.style.display = "none"
    xHistory.style.display = "block"
}*/

function chooseUser() {
    xhr.open("GET", "https://dnbapistore.com/hackathon/customers/3.0/customer/01011900123", true);
    xhr.setRequestHeader('Authorization', "Bearer 3274443e-de83-39b3-8087-2f17fe4e02ea");
}
window.onload = chooseUser();


