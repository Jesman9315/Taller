

$(document).ready(function(){
	var url = 'https://query.yahooapis.com/v1/public/yql?q=select * from feed where url="http://news.yahoo.com/rss/topstories" limit 7&format=json&diagnostics=true&callback=';
	console.log(url);
	$.getJSON(url, function(data) {
	  $.each(data.query.results.item, function(key, valor) {

	  	var img = valor.description.match('<img src="(.+?\.jpg)')[1];
	  	var info = valor.description.match('alt="(.+?)"')[1];
	  	$("#lista").append("<li><a href='"+valor.link+"'><img src='"+img+"' width='130' height='86' /><p><strong>"+valor.title+"</strong><br/>"+info+"</p></a></li>").listview("refresh");
	  });
	});
});