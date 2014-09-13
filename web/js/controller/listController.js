angular.module("app").controller("listController", function ($scope, $http) {
	$http.get("Fallpauschalen.json").success(function (data){
		$scope.entries = data;
		$scope.entries.forEach(function(entry){
entry.relation= Math.round(entry.relation*3156.82)
});
	})
});