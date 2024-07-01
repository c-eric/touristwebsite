// Map variables
let map; // Map object
let start; // Starting location for directions
let destination; // Destination location for directions
let directionService; // Service to get route directions
let directionDisplay; // Renderer to display route directions

// Function to initialize the map
function initMap() {
  // Coordinates for Old Port of Montreal
  let oldport = new google.maps.LatLng(45.5066881, -73.5519259);
  
  // Create a new map centered at Old Port
  map = new google.maps.Map(document.getElementById("map"), {
    center: oldport,
    zoom: 15, // Set zoom level
  });
  
  // Add a marker at Old Port
  const marker = new google.maps.Marker({
    position: oldport,
    map: map,
    animation: google.maps.Animation.DROP, // Drop animation for marker
  });
}

// Add event listener to load the map and set up directions button
window.addEventListener("load", function () {
  const dirBtn = document.querySelector("#get-dir-btn");
  dirBtn.addEventListener("click", getDirections); // Set up click event for directions button
});

// Function to get the user's current location and map directions
function getDirections() {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(
      "You are located at:" +
        position.coords.latitude +
        "," +
        position.coords.longitude
    );
    
    // Set start location to user's current position
    start = new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    
    // Map directions from start to destination
    mapDirections(start);
  });
}

// Function to set up directions service and renderer
function mapDirections(start) {
  directionService = new google.maps.DirectionsService();
  directionDisplay = new google.maps.DirectionsRenderer();
  
  // Set destination to Old Port of Montreal
  destination = new google.maps.LatLng(45.5066881, -73.5519259);
  directionDisplay.setMap(map); // Display route on the map
  
  // Calculate and display the route
  calcRoute(start, destination);
}

// Function to calculate and display route from start to destination
function calcRoute(start, destination) {
  let request = {
    origin: start,
    destination: destination,
    travelMode: google.maps.TravelMode.DRIVING, // Set travel mode to driving
  };

  // Request route from directions service
  directionService.route(request, function (response, status) {
    if (status == "OK") {
      directionDisplay.setDirections(response); // Display route on the map
      
      // Add markers for start and destination locations
      let markerStart = new google.maps.Marker({
        position: start,
        map: map,
        label: "You are here!", // Label for start marker
      });
      let markerDestination = new google.maps.Marker({
        position: destination,
        map: map,
        title: "Old Port", // Title for destination marker
        label: "Old Port of Montréal", // Label for destination marker
      });
    }
  });
}
