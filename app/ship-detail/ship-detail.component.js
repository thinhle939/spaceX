'use strict';

angular.
  module('shipDetail').
  component('shipDetail', {
    templateUrl: 'app/ship-detail/ship-detail.template.html',
    controller: ['$routeParams', '$http',
      function shipDetailController($routeParams, $http) {
        let vm = this;
        let apiUrl = 'https://api.spacexdata.com/v4/ships/' + $routeParams.shipId

        $http.get(apiUrl).
          then(function(response) {
            vm.data = response.data
          }
        )
      }
    ]
  });
