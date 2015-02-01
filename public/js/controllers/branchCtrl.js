app.controller('branchCtrl', ['$scope', '$window', function($scope, window) {

	$scope.branchIndex = 0;

	$scope.nextBranch = function() {
		$scope.branchIndex++;
	}

	$scope.prevBranch = function() {
		$scope.branchIndex = Math.max($scope.branchIndex - 1, 0);
	}

}]);