angular.module('app').controller('msCourseListCtrl', function($scope, msCourse) {
	$scope.courses = msCourse.query();

	$scope.sortOptions = [{value:"title", text:"Sort by Title"},
		{value:"published", text:"Sort by Published Date"}];
	$scope.sortOrder = $scope.sortOptions[0].value;
	console.log($scope.sortOptions[0]);
	console.log($scope.sortOrder);
});