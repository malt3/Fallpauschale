angular.module("app").controller("listController", function ($scope, $http) {
	$http.get("Fallpauschalen.json").success(function (data){
		$scope.entries = data;
		$scope.entries.forEach(function(entry){
			entry.relation= Math.round(entry.relation*3156.82)
		});
	})

	$scope.orderVar = 'name';
	$scope.reverse = false;

	$scope.changeOrder = function(order){
		if ($scope.orderVar == order) {
			$scope.reverse = !$scope.reverse;
		}else{
			$scope.orderVar = order;
			$scope.reverse = false;
		}
	}
});