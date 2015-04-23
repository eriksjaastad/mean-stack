angular.module('app').controller('msCourseDetailCtrl', function($scope, msCachedCourses, $routeParams) {
	msCachedCourses.query().$promise.then(function(collection) {
		collection.forEach(function(course) {
			if(course._id === $routeParams.id) {
				$scope.course = course;
			}
		})
	})
});