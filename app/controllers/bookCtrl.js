"use strict";

app.controller('bookCtrl', function($scope, GuideFactory){

   GuideFactory.loadBooks()
    .then((data) => {
      $scope.books = data;
      $scope.$apply();
    });

});