app.controller('editorCtrl', ['$scope', '$window', 'listService', function($scope, $window, listService) {

	/**
	* Branch (textarea) switching
	*/

	$scope.branchIndex = 0;
	$scope.maxBranchIndex = 0;

	function doTransitions(transitions, elementFromTo) {
		transitions.forEach(function(pair) {
			var from = pair[0],
				to   = pair[1];
			$('.branch'+from).switchClass('branch'+from, 'branch'+to, function() {
				console.log(from + ' to ' + to);
			})
		});
		elementFromTo.forEach(function(triplet) {
			var $el  = triplet[0],
				from = triplet[1],
				to   = triplet[2];
			$el.switchClass(from, to, function() {
				console.log(from + ' to ' + to);
			})
		});
	}
	$scope.nextBranch = function() {
		var right_to_left = [
			['-right', '-main'],
			['-main', '-left'],
			['-left', '-waay-left-there']
		];
		doTransitions(right_to_left, [[$('.branch-right').next(), '', 'branch-right']]);

		$scope.branchIndex++;
		$scope.retrieveEditorContent();
		$scope.maxBranchIndex = Math.max($scope.branchIndex, $scope.maxBranchIndex);
	}

	$scope.prevBranch = function() {
		var left_to_right = [
			['-left', '-main'],
			['-main', '-right'],
			['-right', '-waay-right-there']
		];
		doTransitions(left_to_right, [[$('.branch-left').prev(), '', 'branch-left']]);

		$scope.branchIndex--;
		$scope.retrieveEditorContent();
		if ($scope.branchIndex < 0) {
			$window.location = '/#/listview';
		}
	}

	$scope.range = function(n) {
		return new Array(n);
	}

	/**
	* Branch-switching keybindings for desktop
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

	/**
	* HTML5 Local Storage
	*/
	var listLabel = null;

	// So other branches have some awareness of their context
	var updateLabel = function() {
		listLabel = $scope.editorContent.substring(0,5);
	}

	// $scope.editorContent;
	$scope.autoSaveEditorContent = function() {
		if ($scope.branchIndex === 0) {

			listService.addList($scope.editorContent);

			updateLabel();

		} else {
			listService.updateData(listLabel, $scope.editorContent, $scope.branchIndex);

		}
	}

	$scope.retrieveEditorContent = function() {
		console.log($scope.branchIndex);
		$scope.editorContent = listService.getDataAtIndex(listLabel, $scope.branchIndex);
	}

}]);