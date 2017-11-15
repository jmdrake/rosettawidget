var db = new PouchDB("https://visionpartners.cloudant.com/jaminventory");

function getCategoryItems(category, callback){
    db.find({
        selector: {
            Category : encodeURIComponent(category)
        }
    }).then(function(res){
        callback(res.docs);
    }).catch(function(err){console.log(err)});
}

function getItem(itemname, callback){
    db.get(encodeURIComponent(itemname)).then(function(doc){
        callback(doc);
    }).catch(function(err){console.log(err)});
}

