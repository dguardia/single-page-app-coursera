(function(){
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.readMyValue = "";

  $scope.stateOfBeing = "Empty";


  $scope.checkIfToMuch = function () {
    var findValues = splitString($scope.readMyValue);
    if(findValues <= 3 && !null){
      $scope.stateOfBeing = "Enjoy!";
    }
    else{
      $scope.stateOfBeing = "To Much"
    }
  };
  function splitString(value) {
    var arrayOfStrings = value.split(',');
    console.log("arrayOfStrings :" + arrayOfStrings);
    var numberOfElems = arrayOfStrings.length;
    console.log(numberOfElems)
    return numberOfElems;
  }
};
})();
