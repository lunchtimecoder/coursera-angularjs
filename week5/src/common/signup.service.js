(function () {
    "use strict";

    angular.module('public').service('SignupService', SignupService);

    function SignupService() {
        var service = this;
        service.user = {};

        service.saveUser = function (myUser) {
            service.user = myUser;
            console.log("set fav",myUser);
        };
        service.getUser = function () {
            return service.user;
        };
    };

})();
