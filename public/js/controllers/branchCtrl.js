app.controller('branchCtrl', ['$scope', '$window', function($scope, $window) {

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

	/**
	Keybindings for desktop
	*/

	var map = [];

	$scope.checkCode = function($event) {
		map[$event.keyCode] = $event.type == 'keydown';

		if (map[32] && map[39]) {
			$scope.prevBranch();
			map = [];
		}

		if (map[32] && map[37]) {
			$scope.nextBranch();
			map = [];
		}
	}

}]);