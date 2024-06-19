'use strict';

angular.
  module('shipDetail').
  component('shipDetail', {
    templateUrl: 'app/ship-detail/ship-detail.template.html',
    controller: ['$routeParams', 'Ship',
      function shipDetailController($routeParams, Ship) {
        var self = this;
        self.ship = Ship.get({shipId: $routeParams.shipId}, function(ship) {
          // self.setImage(ship.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          // self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
