angular.module('FbGallery', [])

.factory('FbGallery', function($http) {
	var availableSizes = function(images) {
		var sizes = {
			widths: [],
			heights: []
		};
		for (var i = 0; i < images.length; i++) {
			sizes.widths.push(images[i].width);
			sizes.heights.push(images[i].height);
		}
		return sizes;
	}; // end availableSizes method
	
	return {
		getAlbum: function(album_id) {
			$http.get('https://graph.facebook.com/' + album_id + '/photos').
			success(function(data, status, headers, config) {
				var album = {
					photos: [] 
				};
				var resp = angular.fromJson(data);
				// array of fb photos from album are in resp.data
				photos = resp.data;
				for (var i = 0; i < resp.data.length; i++) {
					// let's make a better accessor 
					var photo = resp.data[i];
					if (i == 1 || i == 2)
						console.log(photo); // just a tester
					// now let's create our custom image objects
					album.photos.push({
						created: photo.created_time,
						id: photo.id,
						images: photo.images,
						availableSizes: availableSizes(photo.images)
					});
				} // end resp.data iterator
				console.log('photos');
				console.log(album.photos);
			}). // end success calback
			error(function(data, status, headers, config) {
				console.log('GET failed with status ' + status + ', data: ' + data);
			});
			
		} // end getAlbum method
	}; // end fbgallery return
}) // end factory
; // end module