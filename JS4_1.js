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
      // function that turns adds class: colorPink when mouse hovers over a specific
      //paragraph
      $scope.paragraphPink = function(){
        angular.element(event.target).addClass("colorPink")
      }
      // function that turns remove class: colorPink when mouse hovers over a specific
      //paragraph
      $scope.paragraphNoPink = function(){
        angular.element(event.target).removeClass("colorPink")
      }
      // function that adds an "!" to the end of all h1 tags
      $scope.addExclamation = function(){
        event.target.innerHTML += "!"
        console.log("addExclamation");
      }
      // function that will confirm whether or not the user really wants to navigate
      // that URL.
      $scope.urlConfirm = function(){
        if()
      }





      // Part II

      // Create an HTML page with some filler content including some paragraphs,
      // headings, and links.
      //
      // When a paragraph is moused over, turn the text of that paragraph pink.
      //
      // Add an exclamation point to the end of each heading.
      //
      // When a link is clicked, confirm that the user wants to navigate to that url.
      // If the user clicks OK, allow the default behavior of the link to be
      // executed. If the user clicks cancel, cancel the default browser behavior
      // by calling event.preventDefault() on the event object.
      //
      // When a link is clicked and the user chooses not to go to the url, remove the link from the DOM.
    }










} ())
