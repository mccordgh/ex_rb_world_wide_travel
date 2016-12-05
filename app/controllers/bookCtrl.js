"use strict";

app.controller('bookCtrl', ($scope, GuideFactory) => {

   GuideFactory.loadBooks()
    .then((data) => {
      $scope.books = data;
      $scope.$apply();
    });

});