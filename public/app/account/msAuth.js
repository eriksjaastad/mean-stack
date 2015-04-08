angular.module('app').factory('msAuth', function($http, msIdentity, $q, msUser) {
	return {
		authenticateUser: function(username, password){
			var dfd = $q.defer();
			$http.post('/login', {username:username, password:password}).then(function(response) {
				if(response.data.success) {
					var user = new msUser();
					angular.extend(user, response.data.user);
					msIdentity.currentUser = response.data.user;
					dfd.resolve(true);
				} else {
					dfd.resolve(false);
				}
			});
			return dfd.promise;
		},
		logoutUser: function() {
			var dfd = $q.defer();
			$http.post('/logout', {logout:true}).then(function() {
				msIdentity.currentUser = undefined;
				dfd.resolve();
			});
			return dfd.promise;
		},
		authorizeCurrentUserForRoute: function(role) {
			if(msIdentity.isAuthorized(role)){
				return true;
			} else {
				return $q.reject('not authorized');
			}
		}
	}
})