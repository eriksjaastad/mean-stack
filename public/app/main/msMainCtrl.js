angular.module('app').controller('msMainCtrl', function($scope) {
	$scope.courses = [
		{name: 'Course 1',  featured: true,  published: new Date('02/20/2014')},
	    {name: 'Course 2',  featured: true,  published: new Date('01/20/2014')},
	    {name: 'Course 3',  featured: true,  published: new Date('12/20/2013')},
	    {name: 'Course 4',  featured: false, published: new Date('11/20/2013')},
	    {name: 'Course 5',  featured: true,  published: new Date('10/20/2013')},
	    {name: 'Course 6',  featured: false, published: new Date('09/20/2013')},
	    {name: 'Course 7',  featured: true,  published: new Date('08/20/2013')},
	    {name: 'Course 8',  featured: false, published: new Date('07/20/2013')},
	    {name: 'Course 9',  featured: true,  published: new Date('02/20/2014')},
	    {name: 'Course 10', featured: true,  published: new Date('02/20/2014')},
	    {name: 'Course 11', featured: true,  published: new Date('02/20/2014')},
	    {name: 'Course 12', featured: true,  published: new Date('01/20/2014')},
	    {name: 'Course 13', featured: true,  published: new Date('12/20/2013')},
	    {name: 'Course 14', featured: false, published: new Date('11/20/2013')},
	    {name: 'Course 15', featured: true,  published: new Date('10/20/2013')},
	    {name: 'Course 16', featured: false, published: new Date('09/20/2013')},
	    {name: 'Course 17', featured: true,  published: new Date('08/20/2013')},
	    {name: 'Course 18', featured: false, published: new Date('07/20/2013')}
	]
});