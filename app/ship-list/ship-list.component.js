angular.module('shipList').
  component('shipList', {
    templateUrl: 'app/ship-list/ship-list.template.html',
    controller: ['Ship', 
      function shipListController(Ship) {
        this.data = Ship.query()
      }
    ]
  })