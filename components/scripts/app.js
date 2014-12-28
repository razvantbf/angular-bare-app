var oneGoal;

require('angular');

require('angular-route');

require('angular-animate');

oneGoal = angular.module('oneGoal', ['ngRoute', 'authorControllers']);

oneGoal.config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/list', {
      templateUrl: 'partials/list.html',
      controller: 'ListController'
    });
    $routeProvider.when('/details/:itemId', {
      templateUrl: 'partials/details.html',
      controller: 'DetailsController'
    });
    return $routeProvider.otherwise({
      redirectTo: '/list'
    });
  }
]);
