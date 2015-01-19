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
