function getComponents(template, page, callback){
	$.get("../ctrls/php/getComponents.php?template=" + template + "&page=" + page, function (results) {        
		var json = [];
		var arr = JSON.parse(results.trim());
		for(var i = 0; i < arr.length; i++) {
			json[i] = JSON.parse(decodeURI(arr[i].json));
			json[i]["_id"] = arr[i]["id"];
		}
		callback (json);
	})
}

function updateComponent(data, callback){
    var id = data["_id"];        
    delete (data["_id"]);
    var jsonstring = JSON.stringify(data);
    $.post("../ctrls/php/updateComponent.php", {"json": jsonstring, "id": id}, function(results){
		callback (results);
	})
}