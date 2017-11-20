function div2json(div, model, options) {
	if(options != undefined) {
	    var imagepath = options["imagepath"];
		var linkpath = options["linkpath"];
	}
	var object = {};
    for(var key in model) {
        element = div.find("#" + key);
        if(element.get(0) != undefined)            
            switch(element.get(0).tagName){
                case "IMG":
                    value = element.attr("src");
                    break;
                case "INPUT":
                    value = element.val();
                    break;
                case "A":
                    value = element.attr("href" );
                    break;
                default:
                    value = element.html();
            }                            
        object[key] = value;
    }
    return object;
}