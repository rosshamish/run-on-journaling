var app = angular.module('app', ['mgo-mousetrap', 'ngTouch', 'ngRoute', 'ngAnimate']);

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
		controller: 'editorCtrl'
	}).
	otherwise({
		redirectTo: '/html/landing.html'
	});
}]);
