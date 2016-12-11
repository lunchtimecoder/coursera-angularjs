(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .constant('SourcePath',"https://davids-restaurant.herokuapp.com")
        .directive('foundItems', foundItemsDirective)
        .service('MenuSearchService', MenuSearchService);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var NarrowCtl = this;
        NarrowCtl.title = "Found Items Title";
        NarrowCtl.button = function() {
          var rtnPromise = MenuSearchService.getMatchedMenusItems(NarrowCtl.itemName);
          rtnPromise.then(function (result) {
            //process result and only keep items that match
              NarrowCtl.found = result;
              console.log(NarrowCtl.found);
          }).catch(function (error) {
              NarrowCtl.found = []; //Empty List
              console.log("Not Happening! " + error);
          });
      }
      NarrowCtl.removeItem = function (itemIndex) {
          NarrowCtl.found.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http','SourcePath'];
    function MenuSearchService($http,SourcePath) {
        var MenuSearch = this;
        MenuSearch.getMatchedMenusItems = function(searchTerm) {
             return $http({method: "GET", url: (SourcePath + "/menu_items.json") })
                    .then(function (result) {
                        // process result and only keep items that match
                        var foundItems = result.data.menu_items.filter( function (item) {
                            return item.description.indexOf(searchTerm) >= 0;
                        });
                        //console.log(foundItems);
                        // return processed items
                        return foundItems;
                    })
            }

    } //End of MenuSearchService

    function foundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                myTitle: '@title',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    } //End of foundItemsDirective

})(); //End of all