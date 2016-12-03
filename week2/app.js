(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var ToBuyList = this;
        ToBuyList.message = "Everything is bought";
        ToBuyList.items = ShoppingListCheckOffService.ToBuyList;
        ToBuyList.bought = function (boughtItem) {
            ShoppingListCheckOffService.moveToBought(boughtItem);
        }
    } //End of ToBuyController

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var BoughtList = this;
        BoughtList.message = "Nothing bought yet";
        BoughtList.items = ShoppingListCheckOffService.BoughtList;
    } //End of AlreadyBoughtController

    function ShoppingListCheckOffService() {
        //maintain lists
        var ShoppingService = this;
        ShoppingService.ToBuyList = [{name:'Space Car',quantity:'10'}];
        ShoppingService.BoughtList = [];

        ShoppingService.moveToBought = function (moveItem) {
            //add to bought and remove from buy
            ShoppingService.BoughtList.push(ShoppingService.ToBuyList[moveItem]);
            ShoppingService.ToBuyList.splice(moveItem, 1);
        }
    }

})(); //End of all