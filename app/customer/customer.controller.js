'use strict';

angular.module('myApp.customer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	  when('/customer', {
	    templateUrl: 'customer/list-customers.view.html',
	    controller: 'CustomerController'
	  }).
	  when('/customer/create', {
	    templateUrl: 'customer/create-customer.view.html',
	    controller: 'CustomerController'
	  }).
	  when('/customer/:customerId', {
	    templateUrl: 'customer/view-customer.view.html',
	    controller: 'CustomerController'
	  }).
	  when('/customer/:customerId/edit', {
	    templateUrl: 'customer/edit-customer.view.html',
	    controller: 'CustomerController'
	  });
}])

.controller('CustomerController', ['$scope', '$route', '$routeParams','$location' , 'CustomerService', function ($scope, $route, $routeParams, $location, CustomerService) {
	$scope.pageTitle = "Customers";

		// Create new Customer
		$scope.create = function() {
			// Create new Customer object
			var customer = new CustomerService({
				firstName: this.firstName
			  , lastName: this.lastName
			  ,	phoneNumber: this.phoneNumber
			  ,	email: this.email
			});

			// Redirect after save
			customer.$save(function(response) {
				$location.path('customer');

				// Clear form fields
				$scope.customerId = '';
				$scope.firstName = '';
				$scope.lastName = '';
				$scope.phoneNumber = '';
				$scope.email = '';
			});
		};

		// Remove existing Customer
		$scope.remove = function() {
			CustomerService.remove({customerId: $scope.customer.id})
				.$promise.then(function() {
					for (var i in $scope.customers) {
						if ($scope.customers[i] === $scope.customer) {
							$scope.customers.splice(i, 1);
						}
					}
					$location.path('customer');
				});
		};

		// Update existing Customer
		$scope.update = function() {
			var customer = $scope.customer;

			CustomerService.update({customerId: $routeParams.customerId}, customer)
				.$promise.then(function() {
					$location.path('customer');
				});
		};

		// Find a list of Customers
		$scope.find = function() {
			$scope.customers = CustomerService.query();
		};

		// Find existing Customer
		$scope.findOne = function() {
			$scope.customer = CustomerService.get({customerId: $routeParams.customerId});
		};
}]);
