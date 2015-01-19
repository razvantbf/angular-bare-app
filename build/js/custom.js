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

app.controller('DefaultController', ['$scope', '$http', function($scope, $http) {}]);

app.controller('PageOneController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {}]);

app.directive('directiveName', [
  '$timeout', function($timeout) {
    return {
      retrict: 'E',
      replace: true,
      template: '',
      scope: {
        text: '@'
      },
      controller: ['$scope', '$http', function($scope, $http) {}],
      link: function(scope, element, attrs) {}
    };
  }
]);

app.factory('ServiceName', [function() {}]);
