function getComponents(template, page, callback){
    $.get("../ctrls/php/getComponents.php?template=" + template + "&page=" + page, function (results) {        
				var json = [];
			  var arr = JSON.parse(results.trim());
			  for(var i = 0; i < arr.length; i++) {
					json[i] = JSON.parse(decodeURI(arr[i].json));
				}
        callback (json);
    })
}