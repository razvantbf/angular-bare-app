var oneGoal;

require('angular');

require('angular-route');

oneGoal = angular.module('oneGoal', ['ngRoute', 'authorControllers']);

oneGoal.config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/list', {
      templateUrl: 'partials/list.html',
      controller: 'ListController'
    });
    return $routeProvider.otherwise({
      redirectTo: '/list'
    });
  }
]);
