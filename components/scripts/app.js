var app;

app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngCookies', 'ngTouch']);

app.config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/default.html',
      controller: 'DefaultController'
    });
    $routeProvider.when('/pageone', {
      templateUrl: 'partials/pageone.html',
      controller: 'PageOneController'
    });
    return $routeProvider.otherwise({
      redirectTo: '/'
    });
  }
]);
