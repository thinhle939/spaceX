'use strict';

angular.
  module('core.ship').
  factory('Ship', ['$resource',
    function($resource) {
      return $resource('https://api.spacexdata.com/v4/ships/query', {}, {
        save: {
          method: 'POST',
          hasBody: true
        }
      }
    );
    }
  ]);
