app.controller('editCtrl', ['$scope', '$window', function($scope, $window) {
	/***************************************************
	Epic Editor
	****************************************************
	*/
	var opts = {
		container: 'epiceditor',
		textarea: null,
		basePath: '../css/epiceditor/',
		clientSideStorage: true,
		localStorageName: 'epiceditor',
		useNativeFullscreen: true,
		parser: marked,
		file: {
			name: 'epiceditor',
			defaultContent: '',
			autoSave: 100
		},
		theme: {
			base: 'base/epiceditor.css',
			preview: 'preview/github.css',
			editor: 'editor/epic-dark.css'
		},
		button: false,
		focusOnLoad: true,
		autogrow: false
	}

	var editor = new EpicEditor(opts).load();



	/***********************************************
	Mousetrap
	************************************************
	*/
	$scope.toggle = [];
	var index = 0;
	$scope.toggle[0] = true;
	$scope.toggle[1] = false;
	$scope.toggle[2] = false;

	$scope.increment = function() {
		$scope.toggle[index] = false;
		index = index + 1;
		$scope.toggle[index] = true;
	}

	$scope.decrement = function() {
		$scope.toggle[index] = false;
		index = index - 1;
		$scope.toggle[index] = true;
	}

}]);