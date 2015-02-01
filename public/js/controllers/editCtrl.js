app.controller('editCtrl', ['$scope', '$window', function($scope, $window) {
	
	var opts = {
		container: 'epiceditor',
		textarea: null,
		basePath: '../../css/epiceditor/',
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
			editor: 'editor/epic-custom.css'
		},
		button: false,
		focusOnLoad: true
	}

	// var editor = new EpicEditor(opts).load();

}]);