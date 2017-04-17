'use strict';

/**
 * @ngdoc overview
 * @name zhenkaApp
 * @description
 * # zhenkaApp
 *
 * Main module of the application.
 */
angular
  .module('zhenkaApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
