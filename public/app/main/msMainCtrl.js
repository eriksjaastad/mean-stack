angular.module('app').controller('msMainCtrl', function($scope, msCourse) {
	$scope.courses = msCourse.query();
});