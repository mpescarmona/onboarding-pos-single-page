'use strict';

angular.module('myApp.category', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/category', {
    templateUrl: 'category/category.html',
    controller: 'CategoryCtrl'
  });
}])

.controller('CategoryCtrl', ['$scope', 'CategoryService', function ($scope, CategoryService) {
	$scope.categories = CategoryService.query();
}]);