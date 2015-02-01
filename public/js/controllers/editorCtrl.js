app.controller('editorCtrl', ['$scope', '$window', function($scope, $window) {

	/**
	* Branch (textarea) switching
	*/

	$scope.branchIndex = 0;
	$scope.maxBranchIndex = 0;

	$scope.nextBranch = function() {
		// $('.branch-main').animate({
		// 	left: "0px",
		// 	width: "15%"
		// }, function() {
		// 	console.log('done animating');
		// 	$scope.branchIndex++;
		// });

		$scope.branchIndex++;
		$scope.retrieveEditorContent();
		$scope.maxBranchIndex = Math.max($scope.branchIndex, $scope.maxBranchIndex);
	}

	$scope.prevBranch = function() {
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