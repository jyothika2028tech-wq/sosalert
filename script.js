// Display current date and time

const currentTime = new Date();

document.getElementById("time").innerHTML =
currentTime.toLocaleString();



// Fake Location

let latitude = 12.9716;
let longitude = 77.5946;


// Display location
navigator.geolocation.getCurrentPosition(function(position){

let latitude = position.coords.latitude;
let longitude = position.coords.longitude;

document.getElementById("latitude").innerHTML = latitude;
document.getElementById("longitude").innerHTML = longitude;

document.getElementById("mapsLink").href =
`https://www.google.com/maps?q=${latitude},${longitude}`;

});

// Google Maps Link

document.getElementById("mapsLink").href =
`https://www.google.com/maps?q=${latitude},${longitude}`;




// Fake Upload Animation


setTimeout(() => {

document.getElementById("status1").innerHTML =
"✓ Location Received";

},2000);



setTimeout(() => {

document.getElementById("status2").innerHTML =
"✓ Audio Uploaded Successfully";

},4000);



setTimeout(() => {

document.getElementById("status3").innerHTML =
"✓ Video Uploaded Successfully";

},6000);



setTimeout(() => {

document.getElementById("status4").innerHTML =
"✓ Admin Successfully Notified";

},8000);
window.onload = function () {
    document.getElementById("alarmSound").play();
};