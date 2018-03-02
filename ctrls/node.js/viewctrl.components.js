function getComponents(template, page, callback){
	$.get("getComponents?template=" + template + "&page=" + page, function (results) {        
		callback (results);
	})
}

function updateComponent(data, callback){
    $.post("updateComponent", data, function(results){
		callback (results);
	})
}