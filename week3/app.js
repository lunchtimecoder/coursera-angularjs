(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .constant('SourcePath',"https://davids-restaurant.herokuapp.com")
        .service('MenuSearchService', MenuSearchService);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var NarrowCtl = this;
      NarrowCtl.button = function() {
          //return MenuSearchService.getMatchedMenusItems("test");
          var rtnPromise = MenuSearchService.getMatchedMenusItems("test");
          rtnPromise.then(function (result) {
              // process result and only keep items that match
              var foundItems = result.data;
              console.log(foundItems);
              // return processed items
              //return foundItems;
              return "djdjd";
          }).catch(function (error) {
              console.log("Not Happening! " + error)
          });
          return "test";
      }
    }

    MenuSearchService.$inject = ['$http','SourcePath'];
    function MenuSearchService($http,SourcePath) {
        var MenuSearch = this;

        MenuSearch.getMatchedMenusItems = function(searchTerm) {
            var response = $http({
                method: "GET",
                url: (SourcePath + "/menu_items.json")
                });
            return response;
        }
//        MenuSearchService.$inject = ['$http','SourcePath'];
//        function MenuSearchService($http,SourcePath) {
//            var MenuSearch = this;
//
//            MenuSearch.getMatchedMenusItems = function(searchTerm) {
//                $http({method: "GET", url: (SourcePath + "/menu_items.json") })
//                    .then(function (result) {
//                        // process result and only keep items that match
//                        var foundItems = result.data;
//                        console.log(foundItems);
//                        // return processed items
//                       //return foundItems;
//                        return searchTerm;
//                    }).catch(function (error) {
//                    console.log("Not Happening! " + error)
//                });
//            }

    } //End of MenuSearchService

})(); //End of all