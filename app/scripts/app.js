'use strict';

/**
 * @ngdoc overview
 * @name lelyvitoweddingApp
 * @description
 * # lelyvitoweddingApp
 *
 * Main module of the application.
 */
angular
  .module('lelyvitoweddingApp', [
    'ngAnimate',
    'ui.router',
    'firebase',
    'angular-loading-bar',
    'angulartics',
    'angulartics.google.analytics'
  ])
  .constant('$', window.$)
  .constant('LLVWD_TITLE', ' | The Wedding of Lely & Vito')
  .config(function($stateProvider, $urlRouterProvider, LLVWD_TITLE) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        data : { pageTitle: 'The Wedding of Lely & Vito' }
      })
      .state('invitation', {
        url: '/invitation',
        templateUrl: 'views/invitation.html',
        data: {pageTitle: 'Invitation' + LLVWD_TITLE}
      })
      .state('location', {
        url: '/location',
        templateUrl: 'views/location.html',
        data: {pageTitle: 'Location' + LLVWD_TITLE}
      })
      .state('transportation', {
        url: '/transportation',
        controller: 'TransportationCtrl',
        templateUrl: 'views/transportation.html',
        data: {pageTitle: 'Transportation' + LLVWD_TITLE}
      })
      .state('rsvp', {
        url: '/rsvp',
        controller: 'RSVPCtrl',
        templateUrl: 'views/rsvp.html',
        data: {pageTitle: 'RSVP' + LLVWD_TITLE}
      })
      .state('about', {
        url: '/about',
        controller: 'AboutCtrl',
        templateUrl: 'views/about.html',
        data: {pageTitle: 'About Us' + LLVWD_TITLE}
      })
      .state('aboutVito', {
        url: '/about/vito',
        templateUrl: 'views/about-vito.html',
        data: {pageTitle: 'Vito\'s Story' + LLVWD_TITLE}
      })
      .state('aboutLely', {
        url: '/about/lely',
        templateUrl: 'views/about-lely.html',
        data: {pageTitle: 'Lely\'s Story' + LLVWD_TITLE}
      })
      .state('album', {
        url: '/album',
        controller: 'AlbumCtrl',
        templateUrl: 'views/album.html',
        data: {pageTitle: 'Album' + LLVWD_TITLE}
      });
  })
  .run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      $rootScope.state = toState;
    });
  });
