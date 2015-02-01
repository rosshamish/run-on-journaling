var app = angular.module('app', ['mgo-mousetrap', 'ngTouch', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: '/html/landing.html'
	}).
	when('/login', {
		templateUrl: 'html/login.html'
	}).
	when('/register', {
		templateUrl: 'html/register.html'
	}).
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
