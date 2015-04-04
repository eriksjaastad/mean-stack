angular.module('app').factory('msAuth', function($http, msIdentity, $q) {
	return {
		authenticateUser: function(username, password){
			var dfd = $q.defer();
			$http.post('/login', {username:username, password:password}).then(function(response) {
				if(response.data.success) {
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
		}
	}
})