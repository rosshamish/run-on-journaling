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
}])
