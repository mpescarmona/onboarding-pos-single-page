'use strict';

angular.module('myApp.category', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	  when('/category', {
	    templateUrl: 'category/list-categories.view.html',
	    controller: 'CategoryController'
	  }).
	  when('/category/create', {
	    templateUrl: 'category/create-category.view.html',
	    controller: 'CategoryController'
	  }).
	  when('/category/:categoryId', {
	    templateUrl: 'category/view-category.view.html',
	    controller: 'CategoryController'
	  }).
	  when('/category/:categoryId/edit', {
	    templateUrl: 'category/edit-category.view.html',
	    controller: 'CategoryController'
	  });
}])

.controller('CategoryController', ['$scope', '$route', '$routeParams','$location' , 'CategoryService', function ($scope, $route, $routeParams, $location, CategoryService) {
	$scope.pageTitle = "Categories";

		// Create new Category
		$scope.create = function() {
			// Create new Category object
			var category = new CategoryService({
				categoryName: this.categoryName
			});

			// Redirect after save
			category.$save(function(response) {
				$location.path('category');

				// Clear form fields
				$scope.categoryId = '';
				$scope.categoryName = '';
			});
		};

		// Remove existing Category
		$scope.remove = function() {
			CategoryService.remove({categoryId: $scope.category.id})
				.$promise.then(function() {
					for (var i in $scope.categories) {
						if ($scope.categories[i] === $scope.category) {
							$scope.categories.splice(i, 1);
						}
					}
					$location.path('category');
				});
		};

		// Update existing Category
		$scope.update = function() {
			var category = $scope.category;

			CategoryService.update({categoryId: $routeParams.categoryId}, category)
				.$promise.then(function() {
					$location.path('category');
				});
		};

		// Find a list of Categorys
		$scope.find = function() {
			$scope.categories = CategoryService.query();
		};

		// Find existing Category
		$scope.findOne = function() {
			$scope.category = CategoryService.get({categoryId: $routeParams.categoryId});
		};
}]);
