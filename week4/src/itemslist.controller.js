(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsListController', ItemsListController);

    ItemsListController.$inject = ['itemData'];
    function ItemsListController(itemData) {
        var itemsList = this;
        itemsList.items = itemData;
    }
})();