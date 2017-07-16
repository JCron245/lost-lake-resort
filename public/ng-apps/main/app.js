angular.module("meanWreed", ['FbGallery','ngRoute', 'AppCtrl'])

// configuration
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
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
	// end /services
	.when('/rates', {
		// #/test
		templateUrl: '/ng-apps/main/views/rates.html',
		controller: 'AppCtrl',
		title: 'Rates'
	})
	// end /rates
	.when('/map', {
		// #/test
		templateUrl: '/ng-apps/main/views/map.html',
		controller: 'AppCtrl',
		title: 'Map'
	})
	// end /map
	.when('/pictures', {
		// #/test
		templateUrl: '/ng-apps/main/views/pictures.html',
		controller: 'AppCtrl',
		title: 'Pictures'
	})
	// end /pictures
	.when('/thank-you', {
		// #/test
		templateUrl: '/ng-apps/main/views/thank-you.html',
		controller: 'AppCtrl',
		title: 'Contact'
	})
	// end /thank-you
	; // end $routeProvider statement
	// end project route
	// end routes
}]);
