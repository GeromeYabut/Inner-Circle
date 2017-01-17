var main = function()
{
	var results = JSON.parse(localStorage.getItem('posts'));
	console.log(results);
	for(var i = 0;i < results.length;i++)
		{
			var posts = results[i];
			//title
			$('<div id=' +i +' class="box">').appendTo('#Title');

			$('<ul id=ul' + i + '>').text(posts.Title).appendTo('#' + i);
			//location
			$('<li>').text("Text").appendTo('#ul' + i);    
			$('<li id="inline">').text(Posts.Post).appendTo('#ul' + i);
			// $('<ul id=' +i +'>').text(posts.Location).appendTo('#matches');
			// //Description
			$('<li>').text("Created at").appendTo('#ul' + i);
			 $('<li id="inline">').text(Posts.createdAt).appendTo('#ul' + i);
			// //Date
			// //$('<li>').text(posts.createdAt.getMonth()).appendTo('#matches');
			// //Provide/ receive + what item 
			$('<li>').text(posts.ProvideRecieve + " " + posts.ItemHouseFood).appendTo('#ul' + i);
			// //Task
			$('<li>').text(posts.Exchange).appendTo('#ul' + i);
			//$('<li>').text(posts.User.username).appendTo('#matches');
			//$('<li>').text(posts.User.email).appendTo('#matches');
		}
	localStorage.removeItem('posts');
}
$(document).ready(main);


