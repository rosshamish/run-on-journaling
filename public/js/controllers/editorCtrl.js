app.controller('editorCtrl', ['$scope', '$window', function($scope, $window) {

	/**
	* Branch (textarea) switching
	*/

	$scope.branchIndex = 0;
	$scope.maxBranchIndex = 0;

	$scope.nextBranch = function() {
		$scope.branchIndex++;
		$scope.maxBranchIndex = Math.max($scope.branchIndex, $scope.maxBranchIndex);
	}

	$scope.prevBranch = function() {
		$scope.branchIndex = $scope.branchIndex - 1;
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
	/* Retrieving */
	// var autosave = localStorage.getItem(localStorageFilename);
	// var text = JSON.parse(autosave);
	// $(textareaIdentifier).val(text);

	$scope.counter = 0;
	$scope.autoSaveEditorContent = function() {
		// This is to assure myself that
		// the localStorage.setItem works
		// localStorage.setItem(localStorageFilename,
		// 	$scope.counter++);

		console.log('model is ' + $scope.editorContent);
	}	

}]);