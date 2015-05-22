angular.module("meanWreed", ['FbGallery','ngRoute', 'AppCtrl'])

// configuration
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		// #/test
		templateUrl: '/ng-apps/main/views/index.html',
		controller: 'AppCtrl',
		title: 'Home'
	})
	// end /
	.when('/contact', {
		// #/test
		templateUrl: '/ng-apps/main/views/contact.html',
		controller: 'AppCtrl',
		title: 'Contact'
	})
	// end /contact
	.when('/services', {
		// #/test
		templateUrl: '/ng-apps/main/views/services.html',
		controller: 'AppCtrl',
		title: 'Services'
	})
	// end /contact
	.when('/rates', {
		// #/test
		templateUrl: '/ng-apps/main/views/rates.html',
		controller: 'AppCtrl',
		title: 'Rates'
	})
	// end /contact
	.when('/map', {
		// #/test
		templateUrl: '/ng-apps/main/views/map.html',
		controller: 'AppCtrl',
		title: 'Map'
	})
	// end /contact
	.when('/pictures', {
		// #/test
		templateUrl: '/ng-apps/main/views/pictures.html',
		controller: 'AppCtrl',
		title: 'Pictures'
	})
	// end /contact
	; // end $routeProvider statement
	// end project route
	// end routes
}]);