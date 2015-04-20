angular.module('app').controller('msProfileCtrl', function($scope, msAuth, msIdentity, msNotifier) {
	$scope.email = msIdentity.currentUser.username;
	$scope.fname = msIdentity.currentUser.firstName;
	$scope.lname = msIdentity.currentUser.lastName;

	$scope.update = function() {
		var newUserData = {
			username: $scope.email,
			firstName: $scope.fname,
			lastname: $scope.lname
		}
		if($scope.password && $scope.password.length > 0) {
			newUserData.password = $scope.password;
		}

		msAuth.updateCurrentUser(newUserData).then(function() {
			msNotifier.notify('Your account has been updated');
		}, function(reason) {
			msNotifier.error(reason);
		})
	}
})