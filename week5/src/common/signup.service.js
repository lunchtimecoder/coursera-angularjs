(function () {
    "use strict";

    angular.module('public')
        .service('SignupService', SignupService);

    function SignupService() {
        var service = this;

        service.setFav = function (myFav) {
            service.user.fav = myFav;
            Console.log("set fav",myFav);
        };
    }

})();
