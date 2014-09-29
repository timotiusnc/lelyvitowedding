'use strict';

/**
 * @ngdoc directive
 * @name yessicaliyaApp.directive:yslThemeChanger
 * @description
 * # yslThemeChanger
 */
angular.module('lelyvitoweddingApp')
  .directive('llvwdThemeChanger', function ($) {
    return {
      templateUrl: 'scripts/directives/llvwd-theme-changer.html',
      restrict: 'E',
      controller: 'llvwdThemeChangerCtrl',
      link: function postLink(scope, element, attrs) {
      }
    };
  })
  .controller('llvwdThemeChangerCtrl', function($scope) {
    $scope.isActive = false;
    $scope.bgColor = 'white'; //default
    $scope.toggleThemeChanger = function() {
      $scope.isActive = !$scope.isActive;
    };
  });
