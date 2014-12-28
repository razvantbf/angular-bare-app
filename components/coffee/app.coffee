
require 'angular'
require 'angular-route'

oneGoal = angular.module 'oneGoal',
	[
		'ngRoute'
		'authorControllers'
	]

oneGoal.config(
		[
			'$routeProvider'
			($routeProvider) ->
				$routeProvider.when '/list',
						templateUrl: 'partials/list.html'
						controller: 'ListController'
				$routeProvider.otherwise
						redirectTo: '/list'
		])

