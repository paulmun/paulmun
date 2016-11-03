app = angular.module('main', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/index.html'
	})
	.when('/contact', {
		templateUrl: 'partials/contact.html'
	})
	.when('/admin', {
		templateUrl: 'partials/admin.html',
		controller: 'adminController'
	})
	.when('/resume', {
		templateUrl: 'partials/resume.html',
		controller: 'resumeController'
	})
	.otherwise('/');
})