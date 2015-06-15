'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.category',
  'myApp.customer',
  'myApp.version',
  'myApp.constants',
  'myApp.categoryService'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/category'});
}]);
