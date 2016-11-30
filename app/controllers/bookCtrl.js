"use strict";

app.controller('bookCtrl', ($scope) => {

  $scope.bookItems = [];

  $scope.loadBooks = () => {

    return new Promise((resolve, reject) => {
      $.ajax({
        url: '../../data/guides.json',
        success: (result) => {
          resolve(result.guides);
        },
        error: (error) => {
          console.log(`ERROR BRO => ${error}`);
          reject(error);
        }
      });
    });
  };

  $scope.loadBooks()
    .then((data) => {
      $scope.bookItems = data;
      $scope.$apply();
    });

});