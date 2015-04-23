angular.module('app').factory('msCachedCourses', function(msCourse) {
	var courseList;

	return {
		query: function() {
			if(!courseList) {
				courseList = msCourse.query();
			}

			return courseList;
		}
	}
})