'use strict';

/**
 * @ngdoc function
 * @name zhenkaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zhenkaApp
 */
angular.module('zhenkaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
