
app.controller 'DefaultController',
	[
		'$scope'
		'$http'
		($scope, $http) ->
			# ...
	]

app.controller 'PageOneController',
	[
		'$scope'
		'$http'
		'$routeParams'
		($scope, $http, $routeParams) ->
			# ....
	]