var inventory = new PouchDB("inventory");

var inventoryremote = new PouchDB("https://visionpartners.cloudant.com/jaminventory");

function getCategoryItems(category, callback){
    inventory.find({
        selector: {
            Category : encodeURIComponent(category)
        }
    }).then(function(res){
        callback(res.docs);
    }).catch(function(err){console.log(err)});
}

function getItem(itemname, callback){
    inventory.get(encodeURIComponent(itemname)).then(function(doc){
        callback(doc);
    }).catch(function(err){console.log(err)});
}

