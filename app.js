(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController ($scope) {
    $scope.items = '';
    $scope.displayMessage = function () {
      $scope.message = displayLogic($scope.items);
    };

    function displayLogic(string)
    {
      if (string.length == 0) {
        return "Please enter data first";
      }

      var splitItems = string.split(',');

      if (splitItems.length <= 3) {
        return "Enjoy!";
      }
      else {
        return "Too much!";
      }
    }
  }
})();
