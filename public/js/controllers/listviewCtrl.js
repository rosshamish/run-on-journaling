app.controller('listviewCtrl', ['$scope', '$window', function($scope, $window) {

	$('body').shards([0,0,0,.5],[255,0,0,.2],[255,255,0,.1],10,2,2,.1,true);
	$scope.lists = ['dev', 'ideas', 'school', 'thoughts'];
}]);