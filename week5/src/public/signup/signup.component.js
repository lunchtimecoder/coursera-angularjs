(function () {
"use strict";

angular.module('public')
.component('signup', {
  templateUrl: 'src/public/signup/signup.html',
  bindings: {
    signup: '<'
  },
  controller: SignupController
});

SignupController.$inject = ['ApiPath'];
function SignupController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
