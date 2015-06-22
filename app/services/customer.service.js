angular.module('myApp.customerService', ['ngResource'])

.factory('CustomerService', ['$resource', 'ApiParams',
  function($resource, ApiParams) {
  	var contentType = { 'Accept': 'application/json', 'Content-Type': 'application/json'}
    return $resource(ApiParams.baseUrl + '/customer/:customerId',
      {customerId: '@customerId'},
      {
        query: {
        			  method: 'GET'
        		  , isArray: true
        		},
        find: {
                method: 'GET'
              , isArray: false
            },
        update: {
                method: 'PUT'
        }
      });
  }]);