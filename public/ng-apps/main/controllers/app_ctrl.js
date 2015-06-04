angular.module('AppCtrl', ['reCAPTCHA'])
	.config(function (reCAPTCHAProvider){
		//reCAPTCHA
		reCAPTCHAProvider.setPublicKey('wreetco69');
		reCAPTCHAProvider.setOptions({
			theme: 'clean'
		});
		//END reCAPTCHA
	})


	.controller('AppCtrl', function($scope, FbGallery, reCAPTCHA) {	
		//Get FB gallery
		$scope.getGallery = function(album_id) {
			$scope.photos = {};
			FbGallery.getAlbum(album_id, {}, function(album) {
				// it would be best to have a nice list of images with sources for the repeater
				var photos = [];
				for (var i = 0; i < album.photos.length; i++) {
					var photo = album.photos[i];
					for (var j = 0; j < photo.images.length; j++) {
						var image = photo.images[j];
						if (image.height == 720) { // we want height 720
							photos.push({
								src: image.source
							});
						}
					}
				}
				// set our scope var so ng-repeat can do its thing
				$scope.photos = photos;
			});
		}; 
		// end getFbPhotos method
	
		//reCAPTCHA
		$scope.user = {};
		$scope.register = function() {
			if($scope.contactus.$valid){
				$scope.showdialog = true;
				//console.log('Form is valid');
			}
		}
		//END reCAPTCHA
		
	}
	//end controller
);
