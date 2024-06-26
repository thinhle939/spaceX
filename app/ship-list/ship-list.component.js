angular.module('shipList').
  component('shipList', {
    templateUrl: 'app/ship-list/ship-list.template.html',
    controller: ['Ship', '$http', 
      function shipListController(Ship, $http) {
        var vm = this;
        
        const nextPageObservable = new rxjs.Subject();
        
        function fetchData(goToPage) {
          var requestBody = {
            "options": {
              "page": goToPage,
            }
          }
          Ship.save({}, requestBody).$promise.then(res => {
            vm.data = res
            vm.page = res.page
          })
        }

        vm.firstPages = function(page) {
          page = 1
          fetchData(page);
        }

        vm.secondPages = function() {
          page = 2
          fetchData(page);
        }

        vm.thirPages = function() {
          page = 3
          fetchData(page)
        }

        vm.nextPage = function(currentPage) {
          page = currentPage + 1
          nextPageObservable.next(page)
        }

        nextPageObservable.subscribe(page => {
          fetchData(page)
        })

        vm.prevPage = function(currentPage) {
          if(currentPage > 1)  {
            page = currentPage - 1 
            nextPageObservable.next(page)
          }
        }

        fetchData();
      }
    ]
  })