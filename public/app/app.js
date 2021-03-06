angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
	var routeRoleChecks = {
		admin: {auth: function(msAuth) {
			return msAuth.authorizeCurrentUserForRoute('admin')
		}},
		user: {auth: function(msAuth) {
			return msAuth.authorizeAuthenticatedUserForRoute()
		}}
	}
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/', { templateUrl: '/partials/main/main', controller: 'msMainCtrl' })
		.when('/admin/users', { templateUrl: '/partials/admin/user-list', 
			controller: 'msUserListCtrl', resolve: routeRoleChecks.admin
		})
		.when('/signup', { templateUrl: '/partials/account/signup', 
			controller: 'msSignupCtrl'
		})
		.when('/profile', { templateUrl: '/partials/account/profile', 
			controller: 'msProfileCtrl', resolve: routeRoleChecks.user
		})
		.when('/courses', { templateUrl: '/partials/courses/course-list', 
			controller: 'msCourseListCtrl'
		})
		.when('/courses/:id', { templateUrl: '/partials/courses/course-details', 
			controller: 'msCourseDetailCtrl'
		})
});

angular.module('app').run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
		if(rejection === 'not authorized') {
			$location.path('/');
		}
	})
});