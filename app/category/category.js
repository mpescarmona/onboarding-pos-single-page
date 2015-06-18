'use strict';

angular.module('myApp.category', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	  .when('/category', {
	    templateUrl: 'category/category2.html',
	    controller: 'CategoryList'
	  })
	  .when('/category/:categoryId', {
	    templateUrl: 'category/category_detail.html',
	    controller: 'CategoryById'
	  });
}])

.controller('CategoryList', ['$scope', 'CategoryService', function ($scope, CategoryService) {
	$scope.pageTitle = "Categories";
	$scope.categories = CategoryService.query();
}])

.controller('CategoryById', ['$scope', '$route', '$routeParams', 'CategoryService', function ($scope, $route, $routeParams, CategoryService) {
	$scope.category = CategoryService.find({categoryId: $routeParams.categoryId});
}]);