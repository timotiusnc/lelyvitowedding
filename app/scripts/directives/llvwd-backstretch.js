'use strict';

/**
 * @ngdoc directive
 * @name lelyvitoApp.directive:llvMmenu
 * @description
 * # llvMmenu
 */
angular.module('lelyvitoweddingApp')
  .directive('llvwdBackstretch', function ($, $timeout) {
    return {
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        
          $.backstretch("images/save-lg.png");
        
      }
    };
  });
