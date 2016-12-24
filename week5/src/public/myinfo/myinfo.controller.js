(function () {
    "use strict";
    angular.module('public')
        .controller('MyinfoController', MyinfoController);

    MyinfoController.$inject = ['menuItems','SignupService'];
    function MyinfoController(menuItems, SignupService) {
        var myinfoCtrl = this;
        myinfoCtrl.user = SignupService.getUser();
    }
})();
