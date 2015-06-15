'use strict';

/* Development constants */

angular.module('myApp.constants', [])

.service('ApiParams', function() {
    var 
        protocol = "http://"
      , ip   = "localhost"
      , url  = "/onboarding-pos-demo/ws"
      , port = "8080"
    this.baseUrl = protocol + ip  + (port != "" ? ":" + port : "") + url;
    this.appBaseUrl = 'app'
});