describe('msUser', function() {
	beforeEach(module('app'));

	describe('isAdmin', function() {
		it('should return false if the roles array does not have an admin entry', inject(function(msUser) {
			var user = new msUser();
			user.roles = ['not admin'];
			expect(user.isAdmin()).to.be.falsey;
		}));

		it('should return true if the rolse array has an admin entry', inject(function(msUser) {
			var user = new msUser;
			user.roles = ['admin'];
			expect(user.isAdmin()).to.be.true;
		}));
	})
})