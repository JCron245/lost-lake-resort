angular.module('AppCtrl', []).controller('AppCtrl', function($scope, FbGallery) {	
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
	}; // end getFbPhotos method
});
