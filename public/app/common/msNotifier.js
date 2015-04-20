angular.module('app').value('msToastr', toastr);

angular.module('app').factory('msNotifier', function(msToastr) {
	return {
		notify: function(msg) {
			msToastr.success(msg);
			console.log(msg);
		},
		error: function(msg) {
			msToastr.error(msg);
			console.log(msg);
		}
	}
})