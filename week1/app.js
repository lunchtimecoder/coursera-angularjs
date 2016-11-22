/**
 * Created by markpateman on 22/11/2016.
 */
(function () {
  'use strict'
  angular.module('MyApp',[])
      .controller('MyController', MyController);

  function MyController($scope) {
  $scope.name = "Some Test Text"
  }

});
