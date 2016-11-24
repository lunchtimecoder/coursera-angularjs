(function () {
  'use strict'
  angular.module("MyApp", [])
      .controller("MyController", function ($scope)
      {
        $scope.items = "";
        $scope.basket = {"message":"","colour":"boxColorBlack","note":""};
        $scope.rtnColour = "boxColorBlack";
        $scope.displayMsg = function () {
          $scope.basket = procItems($scope.items)
        };

        function procItems(inputItems) {
          var itemsArray = inputItems.split(",");
          var itemsCount = itemsArray.length;
          var rtn = {"message":"Please enter data first","colour":"boxColorBlack","note":""};
          if(inputItems != "") {
            if(itemsCount <= 3) {
              rtn = {"message":"Enjoy!","colour":"boxColorBlue","note":""};
            } else {
              rtn = {"message":"Too Much!","colour":"boxColorRed","note":""};
            }
          }
          rtn.note = checkForEmpties(itemsArray);
          return rtn;
        };

        function checkForEmpties(itemsToCheck) {
          var rtnNote = itemsToCheck;
          for (var i in itemsToCheck) {
            if(i.trim.length < 1 ) {rtnNote = "I do NOT consider an empty item valid food!";}
          }
          return rtnNote
        };
      });  //close controller
})(); //close function