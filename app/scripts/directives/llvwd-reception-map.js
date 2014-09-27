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

        var receptionLatLng = new google.maps.LatLng(53.385873, -1.471471);

        var myOptions = {
          zoom: 15,
          center: receptionLatLng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: mapStyle
        };

        var map = new google.maps.Map(document.getElementById('map'), myOptions);
        var marker = new google.maps.Marker({
            position: receptionLatLng,
            map: map,
            title:"Hello World!",
            animation: google.maps.Animation.DROP
        });
      }
    };
  });
