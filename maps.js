function initMap() {
  var styledMapType = new google.maps.StyledMapType(
    [{
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      }
    ], {
      name: 'Map'
    });

  var seattle = {
    lat: 47.6062,
    lng: -122.3321
  }

  var shops = [
    shop = {
      lat: 47.624059,
      lng: -122.3213205
    },
    shop1 = {
      lat: 47.6105161,
      lng: -122.3425511
    },
    shop2 = {
      lat: 47.639718,
      lng: -122.3990656
    },
    shop3 = {
      lat: 47.583712,
      lng: -122.3867149
    }
  ];

  var infos = [
    '536 Broadway E',
    '1915 1st Ave',
    '3200 W McGraw St',
    '2206 California Ave SW'
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    center: seattle,
    zoom: 12,
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: false,
    scrollwheel: false,
    fullscreenControl: false
  });

  var marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
  });

  var infowindow = new google.maps.InfoWindow({
    content: ''
  });

  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

  document.querySelector('.locations').addEventListener('click', function (event) {
    marker.setPosition(shops[event.target.className.substring(8) - 1]);
    infowindow.setContent(infos[event.target.className.substring(8) - 1]);
    infowindow.open(map, marker);
  });
}