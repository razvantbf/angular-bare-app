var authorControllers;

authorControllers = angular.module('authorControllers', []);

authorControllers.controller('ListController', [
  '$scope', '$http', function($scope, $http) {
    return $http.get('json/data.json').success(function(data) {
      return $scope.authors = data;
    });
  }
]);
