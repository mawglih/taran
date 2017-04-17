'use strict';

/**
 * @ngdoc directive
 * @name zhenkaApp.directive:aboutImages
 * @description
 * # aboutImages
 */
angular.module('zhenkaApp')
  .directive('aboutImages', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the aboutImages directive');
      }
    };
  });
