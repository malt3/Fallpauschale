angular.module("app").controller("listController", function ($scope, $http) {
	$http.get("Fallpauschalen.json").success(function (data){
		$scope.entries = data;
		$scope.entries.forEach(function(entry){
			entry.relation= Math.round(entry.relation*3156.82)
		});
	})

	$scope.orderVar = 'name';
	$scope.reverse = false;

	$scope.showName = function (orientation){
		if ($scope.orderVar == "name") {
			if (orientation == "up") {
				if ($scope.reverse)
					{return true}
				else
					{return false};

			}
			if (orientation == "down") {
				if ($scope.reverse) {
					{return false}
				}else{
					{return true}
				}
			};
		}else{return false}
	}

	$scope.showRelation = function (orientation){
		if ($scope.orderVar == "relation") {
			if (orientation == "up") {
				if ($scope.reverse)
					{return true}
				else
					{return false};

			}
			if (orientation == "down") {
				if ($scope.reverse) {
					{return false}
				}else{
					{return true}
				}
			};
		}else{return false}
	}


	$scope.changeOrder = function(order){
		if ($scope.orderVar == order) {
			$scope.reverse = !$scope.reverse;
		}else{
			$scope.orderVar = order;
			$scope.reverse = false;
		}
	}
});