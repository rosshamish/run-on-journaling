app.controller('branchCtrl', ['$scope', '$window', '$timeout', function($scope, $window, $timeout) {

	$scope.branchIndex = 0;
	$scope.maxBranchIndex = 0;

	function moveMainLeft(jq) {
		jq.animate({ "left": "-=55%" }, "slow" );
	}

	function moveLeftLeft(jq) {
		jq.animate({"left": "-=15%"}, "slow");
	}

	function moveRightMain(jq) {
		jq.animate({"left": "-=55%"});
	}

	function moveMainRight(jq) {
		jq.animate({'left':'+=30%'}, "slow" );
	}


	$scope.nextBranch = function() {

		moveMainLeft($('.branch-main'));
		// moveLeftLeft($('.branch-left'));
		// moveRightMain($('.branch-right'));

		// $timeout(function() {
		// 	$scope.branchIndex++;
		// 	$scope.maxBranchIndex = Math.max($scope.branchIndex, $scope.maxBranchIndex);
		// }, 1000);

	}

	$scope.prevBranch = function() {

		//moveMainRight($('.branch-main'));
		//moveMainRight($('.branch-side'));

		//$timeout(500);
		$scope.branchIndex = $scope.branchIndex - 1;


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