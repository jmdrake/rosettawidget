var db = new PouchDB("https://visionpartners:CdMd0215@visionpartners.cloudant.com/ajam"); 

$(document).ready(function () {
    if ((match = location.href.match(/\?item=(\w*)/)) != null) {
        var itemname = decodeURI(location.href.split("=")[1]);
        db.get(itemname).then(function (doc) {
            var header = {};
            header["Mfg"] = doc["Mfg"];
            header["Sku"] = doc["Sku"];
            header["Desc"] = doc["Desc"];
            header["WeekRental"] = doc["Week Rental"];
            header["MonthRental"] = doc["Month Rental"];
            console.log(header);
            var picurl;
            if(doc["Details"]) {
                header["longDesc"] = doc["Details"]["desc"];
                if(doc["Details"]["source"]=="randr") {
                    picurl = "//rocknrollrentals.com";
                    header["longDesc"] = "";
                } else {
                    picurl = "http://yorkville.com";
                    for(var i=0; i < doc["Details"]["thumbnails"].length; i++) {
                        var newDiv = $("#tmplThumbnail").clone();
                        json2div(newDiv, {"img" : doc["Details"]["thumbnails"][i]["img"]}, picurl);
                        newDiv.find("#img").attr("onclick", "$('#prodimg').attr('src', '" + picurl + doc["Details"]["thumbnails"][i]["img"].replace("_th", "_med") + "')");
                        newDiv.show();
                        $("#thumbnails").append(newDiv);
                    }
                    
                }
                
                $("#prodimg").attr("src", picurl + doc["Details"]["thumbnails"][0]["img"].replace("_th", "_med"));
                if(doc["Details"]["features"])
                    for(var i=0; i < doc["Details"]["features"].length; i++)
                        $("#featurelist").append("<li>" + doc["Details"]["features"][i] + "</li>");
                if(doc["Details"]["overview"])
                    for(var i=0; i < doc["Details"]["overview"].length; i++)
                        $("#overview").append("<p>" + doc["Details"]["overview"][i] + "</p>");
                if(doc["Details"]["specifications"])
                    for(var i=0; i < doc["Details"]["specifications"].length; i++) {
                        var specs = doc["Details"]["specifications"][i].split("\n");
                        var tr = "<tr><td>" + specs[0] + "</td><td>" + specs[1] + "</td></tr>"
                        $("#specs").append(tr);                    
                    }

            }
            json2div($("#divProductHeader"), header);
            
        });
    } 
});

