(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .constant('MenuSourceData',"https://davids-restaurant.herokuapp.com/menu_items.json")
        .service('MenuSearchService', MenuSearchService);

    NarrowItDownController.$inject = ['NarrowItDownController'];
    function NarrowItDownController(NarrowItDownController) {
      var NarrowCtl = this;
      NarrowCtl.button = function() {
          return MenuSearchService("test");
      }
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var MenuSearch = this;

        MenuSearch.getMatchedMenusItems = function(searchTerm) {
            return $http({url: MenuSourceData}).then(function (result) {
                // process result and only keep items that match
                var foundItems = result.data;

                // return processed items
                return foundItems;
            }).catch(function (error) {
                console.log("Not Happening!")
            });
        }


    } //End of MenuSearchService

})(); //End of all