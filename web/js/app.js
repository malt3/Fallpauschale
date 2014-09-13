angular.module("app", ["ngRoute"]);
angular.module("app").controller("listController", function ($scope, $http) {
	$http.get("Fallpauschalen.json").success(function (data){
		$scope.entries = data;
	})
});

angular.module("app").config(function($routeProvider){
	$routeProvider.
		when("/", {
			templateUrl: 'partials/landing.html',
			controller: 'listController'
		}).
		otherwise({
			redirectTo: '/'
		})
});