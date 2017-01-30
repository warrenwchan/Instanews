$(document).ready(function () {

	var userSelect = '';
	var loadingMessage = $('.loading');
	loadingMessage.hide();

	$('#selector').on('change', function () {

		$('.container').addClass('compactHeader');
		$('#news').empty();

		loadingMessage.show();

		userSelect = this.value;

		// Built by LucyBot. www.lucybot.com
		var url = 'https://api.nytimes.com/svc/topstories/v2/' + userSelect + '.json';
		url += '?' + $.param({
			'api-key': "049673d3a2eb4eda9c6bb4ec46c49cf5",
			'callback': "12"
		});
		$.ajax({
			url: url,
			method: 'GET',
		})

			.done(function (result) {
				console.log(result);


				function checkPictures(artical) {
					console.log(artical.multimedia.length)
					return artical.multimedia.length;
				}

				var filtered = result.results.filter(checkPictures)
				filtered.splice(12);
				console.log(filtered)


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
					console.log(newsString);

				});

				loadingMessage.hide();

				$('#news').append(newsString);

			})

			.fail(function () {
				$('#news').append("<p class='err'>Got nothing for you</p>")
			});
	});
});