app.directive 'directiveName',
	[
		'$timeout'
		($timeout) ->
			{
				retrict: 'E'
				replace: true
				template: ''
				scope:
					text: '@'
				controller: 
					[
						'$scope'
						'$http'
						($scope, $http) ->
							# ...
					]
				link: (scope, element, attrs) ->
					# ...
			}

	]