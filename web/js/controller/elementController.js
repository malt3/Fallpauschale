angular.module("app").controller("elementController", function ($scope){
	$scope.value=50;
		$scope.setentrylimit=function(value){
			$scope.value= value;
	}
})