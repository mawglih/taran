'use strict';

describe('Directive: aboutImages', function () {

  // load the directive's module
  beforeEach(module('zhenkaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<about-images></about-images>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the aboutImages directive');
  }));
});
