(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var NarrowCtl = this;
      NarrowCtl.button = function() {
          return MenuSearchService.getMatchedMenusItems("test");
      }
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var MenuSearch = this;

        MenuSearch.getMatchedMenusItems = function(searchTerm) {
            $http({url: "https://davids-restaurant.herokuapp.com/menu_items.json"})
                .then(function (result) {
                // process result and only keep items that match
                var foundItems = result.data;
                console.log(foundItems);
                // return processed items
                //return foundItems;
                    return searchTerm;
            }).catch(function (error) {
                console.log("Not Happening! " + error)
            });
        }


    } //End of MenuSearchService

})(); //End of all