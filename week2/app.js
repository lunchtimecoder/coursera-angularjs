(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController);

    ToBuyController.$inject = ['$scope'];
    function ToBuyController($scope) {
        var ToBuyList = this;
        ToBuyList.message = "Everything is bought";
        $scope.test = "this is a test";
    }
    AlreadyBoughtController.$inject = ['$scope'];
    function AlreadyBoughtController() {
        var BoughtList = this;
        BoughtList.message = "Nothing bought yet";
    }


})(); //End of all