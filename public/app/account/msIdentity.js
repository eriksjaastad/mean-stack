angular.module('app').factory('msIdentity', function() {
	return {
		currentUser: undefined,
		isAuthenticated: function() {
			return !!this.currentUser;
		}
	}
})