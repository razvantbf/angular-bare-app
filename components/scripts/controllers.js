var OneGoal;

require('angular');

OneGoal = angular.module('OneGoal', []);

OneGoal.controller('MyController', [
  '$scope', '$http', function($scope, $http) {
    return $http.get('json/data.json').success(function(data) {
      return $scope.authors = data;
    });
  }
]);
