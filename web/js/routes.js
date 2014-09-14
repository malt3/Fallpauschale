angular.module("app").config(function($routeProvider){
	$routeProvider.
		when("/", {
			templateUrl: 'partials/landing.html'
		}).
		when("/overview", {
			templateUrl: 'partials/overview.html',
			controller: 'listController'
		}).
		otherwise({
			redirectTo: '/'
		})
});
