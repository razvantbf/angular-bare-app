var authorControllers;

authorControllers = angular.module('authorControllers', ['ngAnimate']);

authorControllers.controller('ListController', [
  '$scope', '$http', function($scope, $http) {
    return $http.get('json/data.json').success(function(data) {
      return $scope.authors = data;
    });
  }
]);

authorControllers.controller('DetailsController', [
  '$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    return $http.get('json/data.json').success(function(data) {
      $scope.authors = data;
      $scope.whichItem = $routeParams.itemId;
      if ($routeParams.itemId > 0) {
        $scope.prevItem = Number($routeParams.itemId) - 1;
      } else {
        $scope.prevItem = $scope.authors.length - 1;
      }
      if ($routeParams.itemId < $scope.authors.length - 1) {
        return $scope.nextItem = Number($routeParams.itemId) + 1;
      } else {
        return $scope.nextItem = 0;
      }
    });
  }
]);
