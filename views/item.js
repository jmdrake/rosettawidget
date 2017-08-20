$(document).ready(function () {
    if ((match = location.href.match(/\?item=(\w*)/)) != null) {
        var itemname = decodeURI(location.href.split("=")[1]);
        getItem(itemname, function (doc) {
            var newdoc = doc;
            newdoc["Description"] = decodeURI(doc["Description"]);
            newdoc["LongDescription"] = decodeURI(doc["LongDescription"]);
            // doc["Descripton"] = decodeURI(doc["Description"]);
            json2div($("#divProduct"), newdoc, "../images/inventory/");
            var features = decodeURI(newdoc["Features"]).split(";");
            for(var feature in features) {
                $("#FeatureList").append("<li>" + features[feature] + "</li>");
            }
        });
    } 
});

