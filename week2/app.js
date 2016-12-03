/**
 * Created by markpateman on 03/12/2016.
 */

(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController);

    ToBuyController.$inject = ['$scope'];
    function ToBuyController($scope) {
        var ToBuyList = this;
        ToBuyList.message = "Empty";
        $scope.test = "this is a test";
    }


})(); //End of all