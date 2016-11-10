'use strict';

// You will need to get your GoogleMaps API key
// Make a request to the API to get all of the restaurants
// Display then on the page with GMaps
// BONUS: Mark your current location on the map
// BONUS BONUS: Add restul routes
//
// $(() => {

var googleMap = googleMap || {};

googleMap.createMarkerForRestaurant = function (restaurant) {
  var latLng = new google.maps.LatLng(restaurant.lat, restaurant.lng);
  var marker = new google.maps.Marker({
    position: latLng,
    map: googleMap.map,
    // icon: "/images/marker.png",
    animation: google.maps.Animation.DROP
  });
  googleMap.addInfoWindowForRestaurant(restaurant, marker);
};

googleMap.addInfoWindowForRestaurant = function (restaurant, marker) {
  var _this = this;

  google.maps.event.addListener(marker, 'click', function () {

    if (typeof _this.infowindow !== "undefined") {
      _this.infowindow.close();
    }

    _this.infowindow = new google.maps.InfoWindow({
      content: '<img src="' + restaurant.image + '"><p>' + restaurant.name + '</p>'
    });
    _this.infowindow.open(_this.map, marker);
  });
};

googleMap.loopThroughRestaurants = function (data) {
  $.each(data.restaurants, function (index, restaurant) {
    googleMap.createMarkerForRestaurant(restaurant);
  });
};

googleMap.getRestaurants = function () {
  $.get('http://localhost:3000/api/restaurants').done(this.loopThroughRestaurants);
};

googleMap.mapSetup = function () {
  console.log("setting up the map!");
  var $mapDiv = $('#map-canvas');
  console.log($mapDiv);
  //constructor function creating a new Map object.
  this.map = new google.maps.Map($mapDiv[0], {
    center: { lat: 51.52, lng: -0.08 },
    zoom: 14
  });

  this.getRestaurants();
};

$(googleMap.mapSetup.bind(googleMap));

//gets current location provided user says yes.

navigator.geolocation.getCurrentPosition(function (position) {
  var latLng = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
  console.log(latLng);

  // constructor function creating a new Marker object.
  var marker = new google.maps.Marker({
    position: latLng,
    animation: google.maps.Animation.DROP,
    draggable: true,
    map: googleMap.map

  });
});