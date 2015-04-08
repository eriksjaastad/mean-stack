angular.module('app').controller('msUserListCtrl', function($scope, msUser) {
	$scope.users = msUser.query();
});