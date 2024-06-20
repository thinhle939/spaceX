'use strict';

angular.
  module('spaceXApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/login', {
          template: '<user-login></user-login>'
        }).
        when('/ships/:shipId', {
          template: '<ship-detail></ship-detail>'
        }).
        when('/ship-list', {
          template: '<ship-list></ship-list>'
        }).
        otherwise('/login');
    }
  ]);
