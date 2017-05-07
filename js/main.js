$(document).ready(function () {

	$('#selector').selectric();

	var storyCount = 48;
	var userSelect = '';
	var loadingMessage = $('.loading');
	loadingMessage.hide();


	$('#selector').on('change', function () {
		$('.container').addClass('compactHeader');
		$('#news').empty();
		loadingMessage.show();
		userSelect = this.value;

		var url = 'https://api.nytimes.com/svc/topstories/v2/' + userSelect + '.json';
		url += '?' + $.param({
			'api-key': '049673d3a2eb4eda9c6bb4ec46c49cf5',
			'callback': storyCount,
		});

		$.ajax({
			url: url,
			method: 'GET',
		})

		.done(function (result) {
			function checkPictures(artical) {
				return artical.multimedia.length;
			}
			var filtered = result.results.filter(checkPictures)
			filtered.splice(storyCount);
			var newsString = '';
			$.each(filtered, function (item, value) {
				//variances & markups
				var link = value.url;
				var abstract = value.abstract;
				var image = value.multimedia[4].url;
				newsString += '<li><a href=' + link + ' target="_blank">';
				newsString += '<div class="storyImage" style="background-image: url(' + image + ')">';
				newsString += '<div class="abstractText">' + '<p>' + abstract + '</p>' + '</div>';
				newsString += '</div></a></li>';
			});
			loadingMessage.hide();
			$('#news').append(newsString);
		})

		.fail(function () {
			loadingMessage.hide();
			$('#news').append('<div class="err">' + '<p>Got nothing for you...</p>' + '</div>')
		});
	});
});
