angular.module("app", []);
angular.module("app").controller("listController", function ($scope, $http) {
	$http.get("Fallpauschalen.json").success(function (data){
		$scope.entries = data;
		$scope.entries.forEach(function(entry){
			entry.relation= Math.round(entry.relation*3117.36)
			
			});
	})
});

angular.module("app").controller("navigationController", function ($scope) {
	$scope.search={term:""};
});