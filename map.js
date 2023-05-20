//Map
      let map;
      let start;
      let destination;
      let directionMap;
      let directionService;
      let directionDisplay;

      function initMap() {
        let oldport = new google.maps.LatLng(45.5066881, -73.5519259);
        map = new google.maps.Map(document.getElementById("map"), {
          center: oldport,
          zoom: 15,
        });
        const marker = new google.maps.Marker({
          position: oldport,
          map: map,
          animation: google.maps.Animation.DROP,
        });
      }

      window.addEventListener("load", function () {
        const dirBtn = document.querySelector("#get-dir-btn");
        dirBtn.addEventListener("click", getDirections);
      });

      function getDirections() {
        navigator.geolocation.getCurrentPosition(function (position) {
          console.log(
            "You are located at:" +
            position.coords.latitude +
            "," +
            position.coords.longitude
          );
          start = new google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          mapDirections(start);
        });
      }

      function mapDirections(start) {
        directionService = new google.maps.DirectionsService();
        directionDisplay = new google.maps.DirectionsRenderer();
        destination = new google.maps.LatLng(45.5066881, -73.5519259);
        directionDisplay.setMap(map);
        calcRoute(start, destination);
      }

      function calcRoute(start, destination) {
        let request = {
          origin: start,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING,
        };

        directionService.route(request, function (response, status) {
          if (status == "OK") {
            directionDisplay.setDirections(response);
            let markerStart = new google.maps.Marker({
              position: start,
              map: map,
              label: "You are here!",
            });
            let markerDestination = new google.maps.Marker({
              position: destination,
              map: map,
              title: "Old Port",
              label: "Old Port of Montréal",
            });
          }
        });
      }
