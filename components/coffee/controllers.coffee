
authorControllers = angular.module 'authorControllers', 
	[

	]

authorControllers.controller 'ListController',
	[
		'$scope'
		'$http'
		($scope, $http) ->
			$http.get 'json/data.json'
				.success (data) ->
					$scope.authors = data
	]