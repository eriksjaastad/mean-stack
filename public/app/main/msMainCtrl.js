angular.module('app').controller('msMainCtrl', function($scope, msCachedCourses) {
	$scope.courses = msCachedCourses.query();
});