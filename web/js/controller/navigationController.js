angular.module("app").controller("navigationController", function ($scope, $location){
		$scope.identifier=$location.path().substring(1);	
	
	$scope.search={term:""}
	
	
	$scope.change=function(identifier){
		$scope.identifier= identifier;	
		$scope.search.term='';
	}
	
			$scope.searchbar=$location.path().substring(1);	
	
	

})
