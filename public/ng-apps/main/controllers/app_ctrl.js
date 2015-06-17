angular.module('AppCtrl', ['vcRecaptcha'])

	.controller('recapCtrl', ['vcRecaptchaService', '$http', function(vcRecaptchaService, $http){
		var vm = this;
		vm.publickey = "6LeL2QcTAAAAABmreMgmSe6J3up5yrCEIpE-qBVa";
		
		/* vm.signup = function(){
			/* vcRecaptchaService.getResponse() gives you the g-captcha response 
			if(vcRecaptchaService.getResponse() == ""){
				console.log("Please resolve the captcha and submit");	
			}else{
				var reCaptchaResponse = vcRecaptchaService.getResponse();
				var secret = '6LeL2QcTAAAAACLngOeFW7d5ACtikyc_Dy_MJo8o';
				console.log("HTTP post next");
				//var userip = '';
				/* Ajax request to google server with g-captcha-string 
				$http.post('https://www.google.com/recaptcha/api/siteverify?secret=' + secret + '&response=' + reCaptchaResponse).success(function(response){
					if(response.success === true){
						console.log("Successfully verified and signed up the recaptcha user");	
					}else{
						console.log("User verification failed");
					}
				})
				.error(function(error){
					console.log("Error validating response");
				})
				
			}/* end else
		} */
	}])

	.controller('AppCtrl', function($scope, FbGallery) {	
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
		
	}
	//end controller
);
