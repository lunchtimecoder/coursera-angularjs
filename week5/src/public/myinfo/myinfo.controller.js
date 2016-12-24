(function () {
    "use strict";
    angular.module('public')
        .controller('MyinfoController', MyinfoController);

    MyinfoController.$inject = ['menuItems','SignupService'];
    function MyinfoController(menuItems, SignupService) {
        var myinfoCtrl = this;
        myinfoCtrl.user = SignupService.getUser();
        myinfoCtrl.notFound = true;
        if(myinfoCtrl.user.firstName != "N/A") {
            myinfoCtrl.notFound = false;
            myinfoCtrl.dish = {
                name: "",
                description: "",
                img: ""
            };
            var dish = menuItems.menu_items.filter(function (i) {
                    return i.short_name === myinfoCtrl.user.fav;
                });
            if(dish.length > 0) {
                myinfoCtrl.dish.name = dish[0].name;
                myinfoCtrl.dish.description = dish[0].description;
                myinfoCtrl.dish.img = SignupService.imageURL();
            }
        }

    }
})();
