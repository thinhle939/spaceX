'use strict';

angular.
  module('userLogin').
  component('userLogin', {
    templateUrl: 'app/user-login/user-login.template.html',
    controller: ['$scope', '$location', '$cookies',
      function UserLoginController($scope, $location, $cookies) {
        $scope.userName = '';
        $scope.phoneNumber = '';
        $scope.saveUsername = '';

        $scope.myLoginFunc = function() {
          // userLogin.login($scope.userName, $scope.phoneNumber)
          // localStorage.setItem('phonecatApp.passengerName', $scope.userName);
          // localStorage.setItem('phonecatApp.passengerPhone', $scope.phoneNumber);
          // $location.path('/users/index');
          $cookies.put('user-name', $scope.userName)
          $scope.saveUsername = $scope.userName
          console.log($scope.saveUsername)
          $location.path('/ship-list')
        };
      }
    ]
  });
