require 'angular'

OneGoal = angular.module 'OneGoal', []

OneGoal.controller 'MyController', 
	[
		'$scope'
		'$http'
		($scope, $http) ->
			$http.get 'json/data.json'
				.success (data) ->
					$scope.authors = data
	]