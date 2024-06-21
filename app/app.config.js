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
  ]).run(['$rootScope', '$location', '$cookies', function($rootScope, $location, $cookies) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      if (!$cookies.get('user-name') && next.templateUrl !== 'app/user-login/user-login.template.html') {
        $location.path('/login');
      }
    });
  }]);
