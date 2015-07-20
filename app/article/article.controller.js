'use strict';

angular.module('myApp.article', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	  when('/article', {
	    templateUrl: 'article/list-articles.view.html',
	    controller: 'ArticleController'
	  }).
	  when('/article/create', {
	    templateUrl: 'article/create-article.view.html',
	    controller: 'ArticleController'
	  }).
	  when('/article/:articleId', {
	    templateUrl: 'article/view-article.view.html',
	    controller: 'ArticleController'
	  }).
	  when('/article/:articleId/edit', {
	    templateUrl: 'article/edit-article.view.html',
	    controller: 'ArticleController'
	  });
}])

.controller('ArticleController', ['$scope', '$route', '$routeParams','$location' , 'ArticleService', function ($scope, $route, $routeParams, $location, ArticleService) {
	$scope.pageTitle = "Articles";

		// Create new Article
		$scope.create = function() {
			// Create new Article object
			var article = new ArticleService({
				articleName: this.articleName
			});

			// Redirect after save
			article.$save(function(response) {
				$location.path('article');

				// Clear form fields
				$scope.articleId = '';
				$scope.articleName = '';
			});
		};

		// Remove existing Article
		$scope.remove = function() {
			ArticleService.remove({articleId: $scope.article.id})
				.$promise.then(function() {
					for (var i in $scope.articles) {
						if ($scope.articles[i] === $scope.article) {
							$scope.articles.splice(i, 1);
						}
					}
					$location.path('article');
				});
		};

		// Update existing Article
		$scope.update = function() {
			var article = $scope.article;

			ArticleService.update({articleId: $routeParams.articleId}, article)
				.$promise.then(function() {
					$location.path('article');
				});
		};

		// Find a list of Articles
		$scope.find = function() {
			$scope.articles = ArticleService.query();
		};

		// Find existing Article
		$scope.findOne = function() {
			$scope.article = ArticleService.get({articleId: $routeParams.articleId});
		};
}]);
