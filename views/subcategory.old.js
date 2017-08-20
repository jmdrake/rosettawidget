var ajaminventory = new PouchDB("https://visionpartners:CdMd0215@visionpartners.cloudant.com/ajaminventory"); 
var rnrinventory = new PouchDB("https://visionpartners:CdMd0215@visionpartners.cloudant.com/rockandroll"); 

$(document).ready(function () {
    if ((match = location.href.match(/\?subcategory=(\w*)/)) != null) {
        var subcategoryname = decodeURI(location.href.split("=")[1]);
        $("#subcategory").html(subcategoryname);
        ajaminventory.allDocs({include_docs: true}, function(err, doc) {
            for(i=0; i<doc.rows.length; i++) {
                if(doc.rows[i]["doc"]["Category"].trim()==subcategoryname){
                    newDiv = $("#tmplProduct").clone();
                    var product = doc.rows[i]["doc"];
                    product["MonthRental"] = product["Month Rental"];
                    product["WeekRental"] = product["Week Rental"];
                    product["itemLink1"] = "item.html?item=" + product["_id"];
                    product["itemLink2"] = "item.html?item=" + product["_id"];
                    var picurl = "";
                    try {
                        product["imgProduct"] = product["Details"]["thumbnails"][0]["img"].replace("_th", "_med");
                        console.log("Show pic")                    
                        if(product["Details"]["source"]=="randr") {
                            picurl = "//rocknrollrentals.com";
                        } else {
                            picurl = "http://www.yorkville.com";
                        }
                    }
                    catch(err) {
                        console.log("No pic");
                        console.log(product["_id"]);
                    }
                    json2div(newDiv, product, picurl);
                    newDiv.show();
                    $("#items").append(newDiv);
                }
            }
        });
    } 
});

