app.controller('listviewCtrl', ['$scope', '$window', 'listService', function($scope, $window, listService) {

	$scope.lists = listService.getListList();

}]);
