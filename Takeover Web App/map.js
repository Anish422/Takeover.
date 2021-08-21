var map;
var geocoder;
var latLng = 0;
var address = "";
var nameInput = "";
var imgInput ="";
var addCount = 0;

function initMap () {
    geocoder = new google.maps.Geocoder();
    var location = {lat: 43.87463651460001, lng: -79.06972216545675};
     map= new google.maps.Map(document.getElementById("map"), {
        zoom: 12, 
        center: location
    });

    var MarkerOne = new google.maps.Marker({
        position: location, 
        map: map
    });

    var MarkerTwo = new google.maps.Marker({
        position: {lat: 43.849322, lng: -78.980583}, 
        map: map
    });

    var MarkerThree = new google.maps.Marker({
        position: {lat: 43.831809, lng: -79.048059}, 
        map: map
    });

    var MarkerFour = new google.maps.Marker({
        position: {lat: 43.90799, lng: -79.017454}, 
        map: map
    });

    var MarkerFive = new google.maps.Marker({
        position: {lat: 43.881257, lng: -79.117637}, 
        map: map
    });
}

function courtStatusChange (){
    var T = document.getElementById("courtStatus").style.backgroundColor;
    if (T != "red"){
        document.getElementById("courtStatus").style.backgroundColor = "red"
        document.getElementById("courtStatus").innerHTML = "Court Full"
    }

    else if (T="red"){
        document.getElementById("courtStatus").style.backgroundColor = "green"
        document.getElementById("courtStatus").innerHTML = "Court Available"
    }
}

function ImHereChange (){
    var T = document.getElementById("ImHere").style.backgroundColor;
    if (T != "green"){
        document.getElementById("ImHere").style.backgroundColor = "green"

        document.getElementById("userSpan").innerHTML = document.getElementById("username").innerHTML;
        var T = document.getElementById("userHere"),
        displayValue = "";
        if (T.style.display == "")
        T.style.display = "none";
        T.style.display = displayValue;
    }

    else if (T="green"){
        document.getElementById("ImHere").style.backgroundColor = "hsl(24, 97%, 63%)";
        document.getElementById("userSpan").innerHTML ="";
        var T = document.getElementById("userHere"),
        displayValue = "none";
        if (T.style.display == "none")
        T.style.display = "";
        T.style.display = displayValue;
    }
}

function star1(){
    document.getElementById("star1").style.color = "hsl(24, 97%, 63%)";
    document.getElementById("star2").style.color = "#f8e6cf";
    document.getElementById("star3").style.color = "#f8e6cf";
    document.getElementById("star4").style.color = "#f8e6cf";
    document.getElementById("star5").style.color = "#f8e6cf";
}

function star2(){
    document.getElementById("star1").style.color = "hsl(24, 97%, 63%)";
    document.getElementById("star2").style.color = "hsl(24, 97%, 63%)";
    document.getElementById("star3").style.color = "#f8e6cf";
    document.getElementById("star4").style.color = "#f8e6cf";
    document.getElementById("star5").style.color = "#f8e6cf";
}
  
function star3(){
    document.getElementById("star1").style.color = "hsl(24, 97%, 63%)";
    document.getElementById("star2").style.color = "hsl(24, 97%, 63%)";
    document.getElementById("star3").style.color = "hsl(24, 97%, 63%)";
    document.getElementById("star4").style.color = "#f8e6cf";
    document.getElementById("star5").style.color = "#f8e6cf";
}

function star4(){
    document.getElementById("star1").style.color = "hsl(24, 97%, 63%)";
    document.getElementById("star2").style.color = "hsl(24, 97%, 63%)";
    document.getElementById("star3").style.color = "hsl(24, 97%, 63%)";
    document.getElementById("star4").style.color = "hsl(24, 97%, 63%)";
    document.getElementById("star5").style.color = "#f8e6cf";
}

function star5(){
    document.getElementById("star1").style.color = "hsl(24, 97%, 63%)";
    document.getElementById("star2").style.color = "hsl(24, 97%, 63%)";
    document.getElementById("star3").style.color = "hsl(24, 97%, 63%)";
    document.getElementById("star4").style.color = "hsl(24, 97%, 63%)";
    document.getElementById("star5").style.color = "hsl(24, 97%, 63%)";
}

function codeAddress() {
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        this[ "Marker" +addCount]  = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });

        
        this[ "Marker" +addCount].addListener("click", ()=>{
            var T = document.getElementById("openInfo"),
            displayValue = "";
            if (T.style.display == "")
            T.style.display = "none";
            T.style.display = displayValue;
            

            document.getElementById("name2").innerHTML = nameInput;
            document.getElementById("address2").innerHTML = address;
       });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }




function addNew (){
var T = document.getElementById("addNew"),
displayValue = "";
if (T.style.display == "")
T.style.display = "none";
T.style.display = displayValue;
}

function submitCourt () {
imgInput = document.getElementById("img").value;
nameInput = document.getElementById("name").value;
address = document.getElementById("address").value;

if (nameInput == "" || address =="") {
alert("Please fill in all of the required fields!")}

else {
document.getElementById("img").value = "";
document.getElementById("name").value = "";
document.getElementById("address").value = "";
var T = document.getElementById("addNew"),
displayValue = "none";
if (T.style.display == "none")
T.style.display = "";
T.style.display = displayValue;

addCount = addCount +1;

codeAddress();

}}

function closeAdd () {
var T = document.getElementById("addNew"),
displayValue = "none";
 if (T.style.display == "none")
 T.style.display = "";
 T.style.display = displayValue;
 
}

function closeAdd2 () {
    var T = document.getElementById("openInfo"),
    displayValue = "none";
     if (T.style.display == "none")
     T.style.display = "";
     T.style.display = displayValue;
     
    }
    


