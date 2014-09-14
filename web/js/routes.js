angular.module("app").config(function($routeProvider){
	$routeProvider.
		when("/", {
			templateUrl: 'partials/landing.html',
			controller: 'landingController'
		}).
		when("/overview", {
			templateUrl: 'partials/overview.html',
			controller: 'listController'
		}).
		when("/info", {
			templateUrl: 'partials/info.html',
			controller: 'listController'
      }).
		otherwise({
			redirectTo: '/'
		})
});
