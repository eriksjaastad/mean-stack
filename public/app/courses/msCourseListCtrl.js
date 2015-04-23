angular.module('app').controller('msCourseListCtrl', function($scope, msCachedCourses) {
	$scope.courses = msCachedCourses.query();

	$scope.sortOptions = [{value:"title", text:"Sort by Title"},
		{value:"published", text:"Sort by Published Date"}];
	$scope.sortOrder = $scope.sortOptions[0].value;
});