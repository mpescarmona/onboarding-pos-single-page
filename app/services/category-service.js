angular.module('myApp.categoryService', ['ngResource'])

.factory('CategoryService', ['$resource', 'ApiParams',
  function($resource, ApiParams) {
  	var contentType = { 'Accept': 'application/json', 'Content-Type': 'application/json'}
    return $resource(ApiParams.baseUrl + '/category/:categoryId',
      {categoryId: '@categoryId'},
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