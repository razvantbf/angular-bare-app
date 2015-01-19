app = angular.module 'app',
	[
		'ngRoute'
		'ngAnimate'
		'ngCookies'
		'ngTouch'
	]

app.config(
		[
			'$routeProvider'
			($routeProvider) ->
				$routeProvider.when '/',
						templateUrl: 'partials/default.html'
						controller: 'DefaultController'
				$routeProvider.when '/pageone',
						templateUrl: 'partials/pageone.html'
						controller: 'PageOneController'
				$routeProvider.otherwise
						redirectTo: '/'
		])

