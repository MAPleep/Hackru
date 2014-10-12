var x = document.getElementById("demo");
var note = "";
var lat;
var lon;

function getLocation() {
	note = document.getElementById('userInput').value;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

}

function showPosition(position) {
     lat = position.coords.latitude;
     lon = position.coords.longitude; 
    alert(note +" "+ lat +" "+lon);
}
