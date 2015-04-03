angular.module('app').controller('msNavBarLoginCtrl', function($scope, $http, msIdentity, msNotifier, msAuth){
	$scope.identity = msIdentity;
	$scope.signin = function(username, password) {
		msAuth.authenticateUser(username, password).then(function(success) {
			if(success) {
				msNotifier.notify('You are logged in.');
			} else {
				msNotifier.notify('Username/Password was incorrect.');
			}
		});
	}
});