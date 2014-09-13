angular.module("app").controller("elementController", function ($scope, $http){
		$http.get("Fallpauschalen.json").success(function (data){
		$scope.entries = data;
		$scope.maxentries= data.length;
		$scope.entries.forEach(function(entry){
			entry.relation= Math.round(entry.relation*3156.82)
		
		});
	})
	$scope.listOptions={limit:500};
	

})