angular.module("meanWreed", ['ngRoute', 'AppCtrl'])
// configuration
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		// #/test
		templateUrl: '/ng-apps/main/views/index.html',
		controller: 'AppCtrl'
	})
	// end /
	.when('/contact', {
		// #/test
		templateUrl: '/ng-apps/main/views/contact.html',
		controller: 'AppCtrl'
	})
	// end /contact
	.when('/services', {
		// #/test
		templateUrl: '/ng-apps/main/views/services.html',
		controller: 'AppCtrl'
	})
	// end /contact
	.when('/rates', {
		// #/test
		templateUrl: '/ng-apps/main/views/rates.html',
		controller: 'AppCtrl'
	})
	// end /contact
	.when('/map', {
		// #/test
		templateUrl: '/ng-apps/main/views/map.html',
		controller: 'AppCtrl'
	})
	// end /contact
	.when('/pictures', {
		// #/test
		templateUrl: '/ng-apps/main/views/pictures.html',
		controller: 'AppCtrl'
	})
	// end /contact
	; // end $routeProvider statement
	// end project route
	// end routes
}]);


