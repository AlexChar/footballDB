'use strict';

angular.module('footballDb.soccer-service', [])
  .factory('soccerAPIservice', ['$http', function ($http) {
    var soccerAPI = {};

    soccerAPI.getLeagues = function () {
      return $http.get('http://api.football-data.org/alpha/soccerseasons', {headers: { 'X-Auth-Token': 'cc6fe90287ee4b0e8837e4b13b9da44d' }});
    };

    return soccerAPI;

  }]);
