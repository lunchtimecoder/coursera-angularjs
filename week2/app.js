(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var ToBuyList = this;
        ToBuyList.items = ShoppingListCheckOffService.ToBuyList;
        ToBuyList.bought = function (boughtItem) {
            ShoppingListCheckOffService.moveToBought(boughtItem);
        }
        ToBuyList.isEmpty = function() {
            return (ToBuyList.items.length==0) ? 1 : 0;
        }
    } //End of ToBuyController

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var BoughtList = this;
        BoughtList.items = ShoppingListCheckOffService.BoughtList;
        BoughtList.isEmpty = function() {
            return (BoughtList.items.length==0) ? 1 : 0;
        }
    } //End of AlreadyBoughtController

    function ShoppingListCheckOffService() {
        //maintain lists
        var ShoppingService = this;
        ShoppingService.ToBuyList = [
            {name:'Laser Pistols',quantity:'10'},
            {name:'Plasma Cannons',quantity:'2'},
            {name:'Rocket Launchers',quantity:'1'},
            {name:'Laser Lances',quantity:'30'},
            {name:'Grape Shot',quantity:'99'}
            ];
        ShoppingService.BoughtList = [];

        ShoppingService.moveToBought = function (moveItem) {
            //add to bought and remove from buy
            ShoppingService.BoughtList.push(ShoppingService.ToBuyList[moveItem]);
            ShoppingService.ToBuyList.splice(moveItem, 1);
        }
    }

})(); //End of all