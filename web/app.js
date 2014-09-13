angular.module("app", []);
angular.module("app").controller("listController", function ($scope, $http) {
	$http.get("Fallpauschalen.json").success(function (data){
		$scope.entries = data;
	})
});

angular.module("app").controller("searchcontroller", function ($scope, $http) {