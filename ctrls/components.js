function getComponents(template, page, callback){
	$.get("/getComponents?template=" + template + "&page=" + page, function (results) {
		var json = JSON.parse(results);
		if(json.docs)
			callback(json.docs);
	})
}

function updateComponent(data, callback){
    $.post("/updateComponent", data, function(results){
		callback (results);
	})
}