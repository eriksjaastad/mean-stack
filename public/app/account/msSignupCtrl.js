angular.module('app').controller('msSignupCtrl', function($scope, msUser, msNotifier, $location, msAuth) {
	
	$scope.signup = function() {
		var newUserData = {
			username: $scope.email,
			password: $scope.password,
			firstName: $scope.fname,
			lastName: $scope.lname
		};

		msAuth.createUser(newUserData).then(function() {
			msNotifier.notify('User account created');
			$location.path('/');
		}, function(reason) {
			msNotifier.error(reason);
		})
	}
});