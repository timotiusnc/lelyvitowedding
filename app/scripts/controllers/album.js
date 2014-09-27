'use strict';

/**
 * @ngdoc function
 * @name lelyvitoweddingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lelyvitoweddingApp
 */
angular.module('lelyvitoweddingApp')
  .controller('AlbumCtrl', function ($scope) {
    $scope.images = [];
    for(var i=1; i<=22; ++i) {
      $scope.images.push(i);
    }
  });
