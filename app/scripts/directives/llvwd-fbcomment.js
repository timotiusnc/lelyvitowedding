'use strict';

/**
 * @ngdoc directive
 * @name lelyvitoApp.directive:llvMmenu
 * @description
 * # llvMmenu
 */
angular.module('lelyvitoweddingApp')
  .directive('llvwdFbComment', function ($, $timeout) {
    function createHTML(href, width, orderby, numposts, colorscheme) {
      return '<div class="fb-comments" ' +
                'data-href="' + href + '" ' +
                'data-numposts="' + numposts + '" ' +
                'data-width="' + width + '" ' +
                'data-order-by="' + orderby +'" ' +
                'data-colorscheme="' + colorscheme + '">' +
             '</div>';
    }

    return {
      restrict: 'A',
      link: function postLink(scope, elem, attrs) {
        /*$(window).resize(function(){
          $(".fb-comments").attr("data-width", $("#about-comment").width());
          FB.XFBML.parse($("#about-comment")[0]);
        });*/

        attrs.$observe('href', function (newValue) {
          var href        = newValue;
          var width       = attrs.width;
          var numposts    = attrs.numposts    || 5;
          var orderby     = attrs.orderBy    || 'time';
          var colorscheme = attrs.colorscheme || 'light';

          elem.html(createHTML(href, width, orderby, numposts, colorscheme));
          FB.XFBML.parse(elem[0]);
        });
      }
    };
  });
