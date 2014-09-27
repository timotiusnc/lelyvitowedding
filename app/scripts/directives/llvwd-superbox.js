'use strict';

/**
 * @ngdoc directive
 * @name lelyvitoApp.directive:llvMmenu
 * @description
 * # llvMmenu
 */
angular.module('lelyvitoweddingApp')
  .directive('llvwdSuperbox', function ($, $timeout) {
    return {
      restrict: 'EA',
      scope: {
        images: '='
      },
      templateUrl: 'scripts/directives/llvwd-superbox.html',
      link: function postLink(scope, element, attrs) {
        $('.superbox').SuperBox();
      }
    };
  });
