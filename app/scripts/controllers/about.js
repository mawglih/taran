'use strict';

/**
 * @ngdoc function
 * @name zhenkaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the zhenkaApp
 */
angular.module('zhenkaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
