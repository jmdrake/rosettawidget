$(document).ready(function () {
    if ((match = location.href.match(/\?id=(\w*)/)) != null) {
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
      getCurrentUserInfo(function(userinfo){
        if(userinfo){
          $("#fullname").html(decodeURI(userinfo["fullname"]));
          $("#fullname").removeClass("w3-hide");
          $("#usermenu").html(userinfo["menu"]);
          var role = userinfo["role"];
          if(role=="user" || role=="admin") {
            $("#reserve").removeClass("w3-hide");
          }
          if(role=="admin") {
            $("#edit").removeClass("w3-hide");
          }
        }
      });
    } 
});

