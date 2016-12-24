(function () {
    "use strict";

    angular.module('public').service('SignupService', SignupService);
    SignupService.$inject = ['ApiPath'];
    function SignupService(ApiPath) {
        var service = this;
        service.user = {
          firstName: "N/A",
          lastName: "N/A",
          email: "N/A",
          phone: "N/A",
          fav: "N/A"
        };

        service.saveUser = function (myUser) {
            service.user = myUser;
        };
        service.getUser = function () {
            return service.user;
        };
        service.imageURL = function () {
            return ApiPath + "/images/" + service.user.fav + ".jpg";
        };
    };

})();
