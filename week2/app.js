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
        ToBuyList.bought = function (itemName, itemQty) {
            ShoppingListCheckOffService.moveToBought(itemName, itemQty);
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

        ShoppingService.moveToBought = function (itemName, itemQty) {
            //remove and then add
            var itemIndex = ShoppingService.ToBuyList.indexOf(itemName);
            if(itemIndex !== -1) {
                ShoppingService.ToBuyList.splice(itemIndex, 1);
                ShoppingService.BoughtList.push({ name: itemName, quantity: itemQty });
            }
        }
    }

})(); //End of all