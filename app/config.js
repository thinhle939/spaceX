'use strict';

angular.
  module('speceXApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/user-login', {
          template: '<user-login></user-login>'
        })
    }
  ])