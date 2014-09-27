'use strict';

/**
 * @ngdoc directive
 * @name lelyvitoApp.directive:llvMmenu
 * @description
 * # llvMmenu
 */
angular.module('lelyvitoweddingApp')
  .directive('llvwdLightbox', function ($, $timeout) {
    return {
      restrict: 'EA',
      scope: {
        images: '='
      },
      templateUrl: 'scripts/directives/llvwd-lightbox.html',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
