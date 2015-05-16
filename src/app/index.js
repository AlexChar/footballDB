'use strict';

angular.module('footballDb', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ngRoute', 'footballDb.soccer-service'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
