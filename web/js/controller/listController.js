angular.module("app").controller("listController", function ($scope, $http) {


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