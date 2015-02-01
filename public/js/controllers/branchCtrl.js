app.controller('branchCtrl', ['$scope', '$window', '$timeout', function($scope, $window, $timeout) {

	$scope.branchIndex = 0;
	$scope.maxBranchIndex = 0;

	function moveMainLeft(jq) {
		jq.animate({ "left": "-=55%" }, "slow" );
	}

	function moveLeftLeft(jq) {
		jq.animate({"left": "-=15%"}, "slow");
	}

	function moveNextMain(jq) {
		jq.animate({"left": "-=55%"}, "slow");
	}

	function moveMainRight(jq) {
		jq.animate({'left':'+=30%'}, "slow" );
	}


	// Stepping forward...
	// Move the middle to the left (done)
	// Put a new one in the middle
	$scope.nextBranch = function() {

		var main = $('.branch-main');
		main.position.right = '15%';
		moveMainLeft(main);

		$timeout(function() {
			$scope.branchIndex++;
			$scope.maxBranchIndex = Math.max($scope.branchIndex, $scope.maxBranchIndex);

			var nextMain = $('.branch-main');
			nextMain.position.right = '15%';
			moveNextMain(nextMain);

		}, 1000);


		// moveLeftLeft($('.branch-left'));
		// moveRightMain($('.branch-right'));


	}

	$scope.prevBranch = function() {

		//moveMainRight($('.branch-main'));
		//moveMainRight($('.branch-side'));

		//$timeout(500);
		//$scope.branchIndex = $scope.branchIndex - 1;


		if ($scope.branchIndex < 0) {
			//$window.location = '/#/listview';
		}
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

		// left
		if (map[16] && map[37]) {
			$scope.prevBranch();
			map = [];
		}

		// right
		if (map[16] && map[39]) {
			$scope.nextBranch();
			map = [];
		}
	}

}]);