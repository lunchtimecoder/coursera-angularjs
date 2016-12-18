(function () {
    'use strict';

    //angular.module('MenuData', [])
    angular.module('MenuApp')
        .constant('SourcePath', "https://davids-restaurant.herokuapp.com")
        .service('MenuDataService', MenuDataService);


    MenuDataService.$inject = ['$http','SourcePath'];
    function MenuDataService($http, SourcePath) {
        var MenuData = this;

        MenuData.getAllCategories = function() {
            return $http({method: "GET", url: (SourcePath + "/categories.json") })
                .then(function (result) {
                    return result.data;
                }).catch(function (error) {
                    console.log("Not Happening! " + error);
                    return [];  //Return Empty
                });
        }; // End Of getAllCategories
        MenuData.getItemsForCategory = function(categoryShortName) {
            return $http({method: "GET", url: (SourcePath + "/menu_items.json?category="+categoryShortName) })
                .then(function (result) {
                    return result.data.menu_items;
                }).catch(function (error) {
                   console.log("Not Happening! " + error);
                   return [];  //Return Empty;
                });
        }; //End Of getItemsForCategory

    } //End of MenuDataService

})(); //End of Module
