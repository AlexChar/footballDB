'use strict';

angular.module('footballDb')
  .controller('MainCtrl', ['$scope', 'soccerAPIservice', function ($scope, soccerAPIservice) {

    $scope.leagues = [];

    soccerAPIservice.getLeagues().success(function (data) {
      $scope.leagues = data;
    });

  }]);
