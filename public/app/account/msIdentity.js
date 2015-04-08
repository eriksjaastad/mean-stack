angular.module('app').factory('msIdentity', function($window, msUser) {
  	var currentUser;
  	if(!!$window.bootstrappedUserObject) {
    	currentUser = new msUser();
    	angular.extend(currentUser, $window.bootstrappedUserObject);
  	}
	return {
		currentUser: currentUser,
		isAuthenticated: function() {
			return !!this.currentUser;
		}
		isAuthorized: function(role) {
			return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
		}
	}
})