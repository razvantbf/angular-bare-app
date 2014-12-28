
authorControllers = angular.module 'authorControllers', 
	[
		'ngAnimate'
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

authorControllers.controller 'DetailsController',
	[
		'$scope'
		'$http'
		'$routeParams'
		($scope, $http, $routeParams) ->
			$http.get 'json/data.json'
				.success (data) ->
					$scope.authors = data
					$scope.whichItem = $routeParams.itemId
					if $routeParams.itemId > 0 
						$scope.prevItem = Number($routeParams.itemId) - 1
					else
						$scope.prevItem = $scope.authors.length-1

					if $routeParams.itemId < $scope.authors.length-1
						$scope.nextItem = Number($routeParams.itemId) + 1
					else
						$scope.nextItem = 0
	]