(function () {
  'use strict';
  angular.module("LunchCheck", [])
      .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
      //init vars
      $scope.items = "";                  //will hold items to process
      $scope.rtnValues = { message:"", textColour:{color:'black'}, note:"" };
      $scope.displayMsg = function () {
          $scope.rtnValues = processItems($scope.items)
      }
  }
  function processItems(inputItems) {
          var itemsArray = inputItems.split(",");
          var rtn = { message:"Please enter data first", textColour:{color:'red'},note:"" };

          //Test if no items
          if(inputItems != "") {
              //Check for any empty items
              var numEmpty = itemsArray.filter(checkForEmpties).length;  //see if any items empty
              var numItems = (itemsArray.length - numEmpty);             //calc num items without empties
            if(numEmpty == 0) { rtn.note = ""; }
              else { rtn.note = "I do NOT consider an empty item valid food!"; }
            //Test if less than or equal to 3 items
            rtn.textColour = {color:'green'};                            //set text colour as green
            if( numItems <= 3) { rtn.message = "Enjoy!"; } else { rtn.message = "TooMuch!"; }
          }
          return rtn;
  } //close processItems

  //Test for empty string
  function checkForEmpties(item) {
      return item.replace(/^\s+|\s+$/gm,'') == 0
  }

})(); //close function