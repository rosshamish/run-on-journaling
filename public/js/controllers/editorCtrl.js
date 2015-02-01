app.controller('editorCtrl', ['$scope', '$window', function($scope, $window) {

	/**
	* Branch (textarea) switching
	*/

	$scope.branchIndex = 0;
	$scope.maxBranchIndex = 0;

	function doTransitions(transitions) {
		transitions.forEach(function(pair) {
			var from = pair[0],
				to   = pair[1];
			$('.branch'+from).switchClass('branch'+from, 'branch'+to, function() {
				console.log(from + ' to ' + to);
			})
		});
	}
	$scope.nextBranch = function() {
		var right_to_left = [
			['-right', '-main'],
			['-main', '-left'],
			['-left', '']
		];
		doTransitions(right_to_left);

		$scope.branchIndex++;
		$scope.retrieveEditorContent();
		$scope.maxBranchIndex = Math.max($scope.branchIndex, $scope.maxBranchIndex);
	}

	$scope.prevBranch = function() {
		var left_to_right = [
			['-left', '-main'],
			['-main', '-right'],
			['-right', '']
		];
		doTransitions(left_to_right);

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
	var localStorageFilename = 'editor.content'

	// $scope.editorContent;
	$scope.autoSaveEditorContent = function(index) {
		editorContent = JSON.parse(localStorage[localStorageFilename] || '[]');
		editorContent[index] = $scope.editorContent;
		localStorage.setItem(localStorageFilename, JSON.stringify(editorContent));
	}

	$scope.retrieveEditorContent = function() {
		var autosave = JSON.parse(localStorage[localStorageFilename] || '[]');
		$scope.editorContent = autosave[$scope.branchIndex];
	}

}]);