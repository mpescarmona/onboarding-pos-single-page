'use strict';

describe('myApp.article module', function() {

  beforeEach(module('myApp.article'));

  describe('Category controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var articleCtrl = $controller('CategoryCtrl');
      expect(articleCtrl).toBeDefined();
    }));

  });
});