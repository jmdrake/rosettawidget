function clearform(form) {
	var fields = form.find("input");
	for(var i = 0; i < fields.length; i++){
		var fieldtype = fields[i]["type"];
		if(fieldtype=="radio" || fieldtype == "checkbox")
			fields[i].checked = false;
		else 
			fields[i].value = "";	
	}
	var textareas = form.find("textarea");
	for(var i = 0; i < textareas.length; i++)
		textareas[i].value = "";
}