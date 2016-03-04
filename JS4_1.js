// --------------------------------------------------
// Main Module for my JavaScript JS4.1 exercise
// --------------------------------------------------
;(function () {
  'use strict'
// controller inside of js41app Module
  angular.module("js41app",[])
    .controller("js41Controller", ['$scope', '$log', js41Controller])

// Hoisted callback function for js41Controller Controller
    function js41Controller($scope, $log) {

      // function that logs a message to the console when clickLog() is called
      $scope.clickLog = function(){
        $log.log("Yay, it worked!")
      }

      // function that shows/hides text when button is clicked
      $scope.textIsVisible = false
      $scope.showHideText = function(){
        $scope.textIsVisible = !$scope.textIsVisible
      }
      // function that shows/hides an unordered list when a button is clicked
      $scope.unorderedListIsVisible = false
      $scope.showHideList = function(){
        $scope.unorderedListIsVisible = !$scope.unorderedListIsVisible
      }
    }
} ())
