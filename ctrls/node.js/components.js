var PouchDB = require("pouchdb");

PouchDB.plugin(require('pouchdb-find'));

var components = new PouchDB("https://lembenslymencedderyoutst:3525b04add4d7190303d9b7c74ccb4a664a8cd34@visionpartners.cloudant.com/jamcomponents");


// components.getComponents(req.query.template, req.query.page, function(doc){
exports.getComponents = function(template, page, callback){
    components.find({
        selector: {
            template : template,
            page : page
        }
    }).then(function(res){
        callback(res)
    }).catch(function(err){callback(err); console.log(err)});
}

// components.updateComponent(req.body, function(results){
exports.updateComponent = function(component, callback){
    components.get(component["_id"]).then(function(doc){
        component["_rev"] = doc["_rev"];
        components.put(component).then(function(results){
            callback(results);
        }).catch(function(err){callback(err); console.log(err)});
    })
}