(function () {
    "use strict";
    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['menuItems','SignupService'];
    function SignupController(menuItems, SignupService) {
        var signupCtrl = this;

        signupCtrl.submit = function () {
            signupCtrl.notFound = false;
            signupCtrl.completed = true;

            signupCtrl.user.fav = signupCtrl.user.fav.toUpperCase();
            var r = menuItems.menu_items.filter(function (i){
                return i.short_name === signupCtrl.user.fav;
            });

            SignupService.saveUser(signupCtrl.user)
            if( r.length === 0 ) {
                signupCtrl.notFound = true;
                signupCtrl.completed = false;
            }
        };
    }
})();
