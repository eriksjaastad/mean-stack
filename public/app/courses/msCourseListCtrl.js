angular.module('app').controller('msCourseListCtrl', function($scope, msCourse) {
	$scope.courses = msCourse.query();
});