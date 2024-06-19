'use strict';

angular.
  module('core.ship').
  factory('Ship', ['$resource',
    function($resource) {
      debugger;
      return $resource('https://api.spacexdata.com/v4/ships/', {}, {
        query: {
          method: 'GET',
          params: {shipId: 'ships'},
          isArray: true
        }
      });
    }
  ]);
