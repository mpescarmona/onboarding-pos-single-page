angular.module('myApp.articleService', ['ngResource'])

.factory('ArticleService', ['$resource', 'ApiParams',
  function($resource, ApiParams) {
  	var contentType = { 'Accept': 'application/json', 'Content-Type': 'application/json'}
    return $resource(ApiParams.baseUrl + '/article/:articleId',
      {articleId: '@articleId'},
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