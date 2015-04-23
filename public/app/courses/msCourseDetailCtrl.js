angular.module('app').controller('msCourseDetailCtrl', function($scope, msCourse, $routeParams) {
	$scope.course = msCourse.get({_id:$routeParams.id})
})