var app = angular.module('app', ['mgo-mousetrap', 'ngTouch', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: '/html/landing.html'
	}).
	// login, register handled by express
	when('/listview', {
		templateUrl: '/html/listview.html',
		controller: 'listviewCtrl'
	}).
	when('/editor', {
		templateUrl: '/html/editor.html',
		controller: 'branchCtrl'
	}).
	otherwise({
		redirectTo: '/html/landing.html'
	});
}]);


/* -------------------------------------
 *     HTML5 localStorage autosaving
 * ------------------------------------- */
/* derivate work of https://gist.github.com/d3nj3ll/1640127 */

$(document).ready(function() {
	var localStorageFilename = 'editor-contents';
	var textareaIdentifier = 'textarea.branch#0';
	/* Retrieving */
	var autosave = localStorage.getItem(localStorageFilename);
	var text = JSON.parse(autosave);
	$(textareaIdentifier).val(text);

	/* Saving */
	$(textareaIdentifier).bind('input propertychange', function(){
		var file = $(textareaIdentifier).val();
		localStorage.setItem(localStorageFilename, JSON.stringify(file));
	});
});