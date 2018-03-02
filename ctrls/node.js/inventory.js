var PouchDB = require("pouchdb");

PouchDB.plugin(require('pouchdb-find'));

var inventory = new PouchDB("https://lembenslymencedderyoutst:3525b04add4d7190303d9b7c74ccb4a664a8cd34@visionpartners.cloudant.com/jaminventory");

exports.getCategoryItems = function(category, callback){
    inventory.find({
        selector: {
            Category : encodeURIComponent(category)
        }
    }).then(function(res){
        for(var i=0; i < res.docs.length; i++)
            res.docs[i]["id"] = res.docs[i]["_id"];
        callback(res.docs);
    }).catch(function(err){console.log(err)});
}

exports.getItem = function(itemname, callback){
    inventory.get(encodeURIComponent(itemname)).then(function(doc){
        callback(doc);
    }).catch(function(err){console.log(err)});
}
