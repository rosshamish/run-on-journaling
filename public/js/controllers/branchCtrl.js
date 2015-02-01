app.controller('branchCtrl', ['$scope', function($scope) {

	$scope.branchIndex = 0;
	$scope.maxBranchIndex = 0;

	$scope.nextBranch = function() {
		$scope.branchIndex++;
		$scope.maxBranchIndex = Math.max($scope.branchIndex, $scope.maxBranchIndex);
	}

	$scope.prevBranch = function() {
		$scope.branchIndex = Math.max($scope.branchIndex - 1, 0);
	}

	$scope.range = function(n) {
		return new Array(n);
	}

}]);