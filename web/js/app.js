angular.module("app", ["ngRoute"]);
angular.module("app").controller("listController", function ($scope, $http) {
	$http.get("Fallpauschalen.json").success(function (data){
		$scope.entries = data;
	})
});

angular.module("app").controller("compareController", function (){

});

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
			templateUrl: 'partials/comparison',
			controller: 'compareController'
		}).
		otherwise({
			redirectTo: '/'
		})
});

angular.module("app").controller("navigationController", function ($scope){
	$scope.search={term:""}
	})