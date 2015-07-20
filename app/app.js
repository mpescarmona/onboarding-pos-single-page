'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.category',
  'myApp.article',
  'myApp.customer',
  'myApp.version',
  'myApp.constants',
  'myApp.categoryService',
  'myApp.customerService',
  'myApp.articleService'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/category'});
}]);
