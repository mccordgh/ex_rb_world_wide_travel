"use strict";

var app = angular.module('bookApp', ["ngRoute"]);

// app.config(function($routeProvider){
	
// 	$routeProvider
// 		.when('/books/list', {
// 			templateUrl: '../partials/guide-list.html',
// 			controller: 'bookCtrl'
// 		})
// 		.otherwise('/books/list');

// });


app.config(function($routeProvider){
	
	$routeProvider
		.when('/books/list', {
			templateUrl: '../partials/guide-list.html',
			controller: 'bookCtrl'
		})
		.otherwise('/books/list');

});