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
        //$.backstretch("images/save-lg.jpg");
        
        var goToTop = $('#go-top');
        $(window).scroll(function() {
          if ($(this).scrollTop() > 100) {
            goToTop.fadeIn();
          } else {
            goToTop.fadeOut();
          }
        });
      }
    };
  });
