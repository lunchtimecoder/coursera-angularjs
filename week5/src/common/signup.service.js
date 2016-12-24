(function () {
    "use strict";

    angular.module('public').service('SignupService', SignupService);

    function SignupService() {
        var service = this;
        service.user = {fav:""};

        service.setFav = function (myFav) {
            service.user.fav = myFav;
            console.log("set fav",myFav);
        };
    };

})();
