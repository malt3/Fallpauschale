angular.module("app").controller("navigationController", function ($scope){
	$scope.search={term:""}
	
	
	$scope.change=function(identifier){
		$scope.identifier= identifier;
		
		
	}
})
