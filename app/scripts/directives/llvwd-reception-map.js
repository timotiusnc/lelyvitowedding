'use strict';

/**
 * @ngdoc directive
 * @name lelyvitoApp.directive:llvMmenu
 * @description
 * # llvMmenu
 */
angular.module('lelyvitoweddingApp')
  .directive('llvwdReceptionMap', function ($, $timeout) {
    return {
      restrict: 'EA',
      //templateUrl: 'scripts/directives/llvwd-reception-map.html',
      link: function postLink(scope, element, attrs) {
        var mapStyle = [
          {
              "featureType": "landscape",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 65
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "poi",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 51
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 30
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 40
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "transit",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "administrative.province",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "lightness": -25
                  },
                  {
                      "saturation": -100
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                  {
                      "hue": "#ffff00"
                  },
                  {
                      "lightness": -25
                  },
                  {
                      "saturation": -97
                  }
              ]
          }
        ];

        var akadLatLng = new google.maps.LatLng(-7.811642, 112.026139);
        var akadPopup = new google.maps.InfoWindow({
          content: '<div class="gmaps-popup">'+
            '<p>Lokasi Akad</p>' + 
            '<address>Jl. Masjid Al Huda 8<br>' +
            'Kediri - Jawa Timur<br>' +
            '<a href="https://maps.google.com/maps?q=Lokasi%20Akad%20Nikah%20Lely%26Vito!@-7.811642,112.026139" target="_blank">' +
              'View on Google Maps' +
            '</a>' +
            '</div>'
        });

        var receptionLatLng = new google.maps.LatLng(-7.806795, 112.042286);
        var receptionPopup = new google.maps.InfoWindow({
          content: '<div class="gmaps-popup">'+
            '<p>Lokasi Resepsi</p>' + 
            '<address>Gedung Bhagawanta Bhari<br>' +
            'Jl. Pamenang 1<br>' +
            'Kediri - Jawa Timur<br>' +
            '<a href="https://maps.google.com/maps?q=Lokasi%20Resepsi%20Nikah%20Lely%26Vito!@-7.806795,112.042286" target="_blank">' +
              'View on Google Maps' +
            '</a>' +
            '</div>'
        });

        var myOptions = {
          zoom: 14,
          center: receptionLatLng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: mapStyle
        };

        var map = new google.maps.Map(document.getElementById('map'), myOptions);
        var akadMarker = new google.maps.Marker({
          position: akadLatLng,
          map: map,
          title:"Lokasi Akad!",
          animation: google.maps.Animation.DROP
        });
        var receptionMarker = new google.maps.Marker({
          position: receptionLatLng,
          map: map,
          title:"Lokasi Resepsi!",
          animation: google.maps.Animation.DROP
        });

        akadPopup.open(map, akadMarker);
        receptionPopup.open(map, receptionMarker);
        google.maps.event.addListener(receptionMarker, 'click', function() {
          receptionPopup.open(map, receptionMarker);
        });
        google.maps.event.addListener(akadMarker, 'click', function() {
          receptionPopup.open(map, akadMarker);
        });
      }
    };
  });
