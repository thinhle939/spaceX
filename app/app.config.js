'use strict';

angular.
  module('spaceXApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/login', {
          template: '<user-login></user-login>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/ship-list', {
          template: '<ship-list></ship-list>'
        }).
        otherwise('/login');
    }
  ]);
