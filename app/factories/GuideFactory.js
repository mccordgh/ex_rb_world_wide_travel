"use strict";

app.factory('GuideFactory', function() {
 
  let bookItems = [];

  let FuncObj = {
    loadBooks() {

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
    },
    getBooks() {
      return bookItems;
    }
  };

  return FuncObj;
});