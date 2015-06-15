angular.module('myApp.categoryService', ['ngResource'])

.factory('CategoryService', ['$resource', 'ApiParams',
  function($resource, ApiParams) {
  	var contentType = { 'Accept': 'application/json', 'Content-Type': 'application/json'}
    return $resource(ApiParams.baseUrl + '/category/:categoryId', {},
    {
      query: {
      			method: 'GET'
//      		  , params: {categoryId:'1'}
      		  , isArray: true
      		  , headers: contentType
      		  , xhrFields: {
			    // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
			    // This can be used to set the 'withCredentials' property.
			    // Set the value to 'true' if you'd like to pass cookies to the server.
			    // If this is enabled, your server must respond with the header
			    // 'Access-Control-Allow-Credentials: true'.
			    withCredentials: false
			  }
      		}
    });
  }]);