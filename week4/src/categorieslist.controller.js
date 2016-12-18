(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesListController', CategoriesListController);

    CategoriesListController.$inject = ['catData'];
    function CategoriesListController(catData) {
        var categories = this;
        categories.items = [];

        categories.$onInit = function () {
            categories.items = catData
        };
    }

})();