angular.module('app').controller('msNavBarLoginCtrl', function($scope, $http, msIdentity, msNotifier, msAuth, $location){
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

	$scope.signout = function(){
		msAuth.logoutUser().then(function() {
			$scope.username = "";
			$scope.password = "";
			msNotifier.notify('You have signed out');
			$location.path('/');
		})
	}
});