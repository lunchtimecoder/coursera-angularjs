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
        ShoppingService.ToBuyList = [{name:'Racing Car',quantity:'10'}];
        ShoppingService.BoughtList = [];

        ShoppingService.moveToBought = function (itemName, itemQty) {
            var item = { name: itemName, quantity: itemQty };
            //remove and then add
            var itemIndex = ShoppingService.ToBuyList.indexOf(item.name);
            if(itemIndex !== -1) {
                ShoppingService.ToBuyList.splice(itemIndex, 1);
                ShoppingService.BoughtList.push(item);
            }
        }
    }

})(); //End of all