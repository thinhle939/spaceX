'use strict';

angular.
  module('userLogin').
  component('userLogin', {
    templateUrl: '<a>hahahah</a>',
    controller: [
      function UserLoginController() {
        $scope.userName = '';
        $scope.phoneNumber = '';

        // $scope.myFunc = function() {
        //   userLogin.login($scope.userName, $scope.phoneNumber)
        //   localStorage.setItem('phonecatApp.passengerName', $scope.userName);
        //   localStorage.setItem('phonecatApp.passengerPhone', $scope.phoneNumber);
        //   $location.path('/users/index');
        // };
      }
    ]
  });
