var app = angular.module('app', ['mgo-mousetrap', 'ngTouch', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/listview', {
  		templateUrl: '/html/listview.html',
  		controller: 'listviewCtrl'
    }).
    when('/editor', {
    	templateUrl: '/html/editor.html',
      controller: 'branchCtrl'
    }).
 	otherwise({
  		redirectTo: '/editor'
  	});
}])
