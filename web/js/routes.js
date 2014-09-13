angular.module("app").config(function($routeProvider){
	$routeProvider.
		when("/", {
			templateUrl: 'partials/landing.html'
		}).
		when("/overview", {
			templateUrl: 'partials/overview.html',
			controller: 'listController'
		}).
		when("/comparison", {
			templateUrl: 'partials/comparison.html',
			controller: 'compareController'
		}).
		otherwise({
			redirectTo: '/'
		})
});