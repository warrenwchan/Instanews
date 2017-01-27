$(function(){
    var url = "https://api.nytimes.com/svc/topstories/v2/home.json";

    url += '?' + $.param({
    'api-key': "0da64a8f458b49629ffa223d7ac34353"
    });

    $.ajax({
    url: url,
    method: 'GET',

    }).done(function(result) {
    console.log(result);

    }).fail(function(result) {
    .append ("sorry cannot find any news")
    });
})