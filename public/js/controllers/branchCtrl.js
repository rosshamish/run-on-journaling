app.controller('branchCtrl', ['$scope', '$window', function($scope, $window) {
	var index = 0;
	$scope.branches = ['thoughts', 'ideas', 'school', 'notes'];
	$scope.currentBranch = $scope.branches[index];


	$scope.increment = function() {
		index ++;
		checkBounds();
		updateCurrentBranch();
	}

	$scope.decrement = function() {
		index --;
		checkBounds();
		updateCurrentBranch();
	}

	var checkBounds = function() {
		if (index >= $scope.branches.length) {
			index = $scope.branches.length - 1;
		}
		if (index <= -1) {
			index = 0;
		}
	}

	var updateCurrentBranch = function() {
		$scope.currentBranch = $scope.branches[index];
	}

}]);