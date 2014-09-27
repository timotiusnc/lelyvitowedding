'use strict';

/**
 * @ngdoc function
 * @name lelyvitoweddingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lelyvitoweddingApp
 */
angular.module('lelyvitoweddingApp')
  .controller('RSVPCtrl', function ($scope, $firebase) {
    //// rsvp
    var rsvpRef = new Firebase('https://lely-vito.firebaseio.com/rsvp');
    $scope.allRSVP = $firebase(rsvpRef).$asArray();
    $scope.isRSVPLoading = true;
    $scope.currentUserRSVP = 2;

    var updateCurrentUserRSVP = function() {
      for(var i=0,j=$scope.allRSVP.length; i<j; ++i) {
        if ($scope.user.id === $scope.allRSVP[i].user.id) {
          $scope.currentUserRSVP = $scope.allRSVP[i].rsvp
          return;
        }
      }
    };

    var updateRSVPByUserId = function(userId, rsvp) {
      for(var i=0,j=$scope.allRSVP.length; i<j; ++i) {
        if ($scope.user.id === $scope.allRSVP[i].user.id) {
          $scope.allRSVP[i].rsvp = rsvp;
          $scope.allRSVP.$save(i);
          return;
        }
      }
    };

    var isRSVPByUserIDExist = function() {
      if ($scope.allRSVP && $scope.user) {
        for(var i=0,j=$scope.allRSVP.length; i<j; ++i) {
          if ($scope.user.id === $scope.allRSVP[i].user.id) {
            return $scope.allRSVP[i];
          }
        }
      }

      return false;
    };

    $scope.allRSVP.$loaded()
      .then(function() {
        $scope.isRSVPLoading = false;
        if ($scope.user) updateCurrentUserRSVP();
      });

    $scope.updateRSVP = function() {
      if ($scope.allRSVP) {
        updateCurrentUserRSVP();
      }
    };

    $scope.$watch('currentUserRSVP', function(currentUserRSVP) {
      if (angular.isDefined(currentUserRSVP) && currentUserRSVP !== 2) {
        console.log('currentUserRSVP changed', currentUserRSVP);
        if (isRSVPByUserIDExist()) {
          updateRSVPByUserId($scope.user.id, currentUserRSVP);
        } else {
          $scope.allRSVP.$add({
            rsvp: currentUserRSVP,
            user: $scope.user,
            timestamp: Firebase.ServerValue.TIMESTAMP
          });
        }
      }
    });

    $scope.rsvpMatcher = function(rsvpFilter) {
      return function(rsvp) {
        return rsvp.rsvp === rsvpFilter;
      }
    };

    $scope.countRSVP = function(rsvpVal) {
      var retval = 0;
      angular.forEach($scope.allRSVP, function(rsvp) {
        if (rsvp.rsvp === rsvpVal) ++retval;
      });

      return retval;
    };

    //// Simple Login
    var myRef = new Firebase("https://lely-vito.firebaseio.com");
    var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {
      if (error) { // an error occurred while attempting login
        console.log('errorr',error);
        $scope.isLoggedIn = false;
      } else if (user) { // user authenticated with Firebase
        $scope.$apply(function() {
          $scope.isLoggedIn = true;
          $scope.user = user;
          $scope.updateRSVP();
        });
      } else { // user is logged out
        console.log('user is logged out');
        $scope.isLoggedIn = false;
      }
    });

    $scope.loginFB = function() {
      authClient.login('facebook');
    };

    $scope.loginTW = function() {
      authClient.login('twitter');
    };
  });
