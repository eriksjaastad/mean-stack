angular.module('app').factory('msCourse', function($resource) {
	var CourseResource = $resource('/api/courses/:id', {_id: "@id"}, {
		update: {method: 'PUT', isArray:false}
	});
	return CourseResource;
})