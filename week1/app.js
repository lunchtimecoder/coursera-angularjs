(function () {
  'use strict'
  angular.module("LunchCheck", [])
      .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = [$scope]

  function LunchCheckController($scope) {
      //init vars
      $scope.items = "";  //will hold items to process
      $scope.basket = {"message": "", "colour": "boxColorBlack", "note": ""}; //return object
      $scope.displayMsg = function () {
          $scope.basket = processItems($scope.items)
      }
  }
  function processItems(inputItems) {
          var itemsArray = inputItems.split(",");
          var rtn = { "message":"Please enter data first", "colour":"boxColorBlack", "note":""};

          //Test if no items
          if(inputItems != "") {
              //Check for any empty items
              var numEmpty = itemsArray.filter(checkForEmpties).length
              var numItems = (itemsArray.length - numEmpty)
              if(numEmpty == 0) { rtn.note = ""; }
              else { rtn.note = "I do NOT consider an empty item valid food!"; }
            //Test if less than or equal to 3 items
            if( numItems <= 3) {
              rtn = { "message":"Enjoy!", "colour":"boxColorBlue", "note":""};
            } else {
              rtn = { "message":"Too Much!", "colour":"boxColorRed", "note":""};
            }
          }
          return rtn;
  } //close processItems

  //Test for empty string
  function checkForEmpties(item) {
      return item.replace(/^\s+|\s+$/gm,'') == 0
  }

})(); //close function