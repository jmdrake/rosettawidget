var jwc = new PouchDB("webcomponents");

var jwcremote = new PouchDB("https://wakedidededgaidscendessu@cc0ed739c9ac6696c232122f99d1a193d5e308e6:visionpartners.cloudant.com/jamwebcomponents");

jwc.sync(jwcremote);

function getComponentList(type, callback){
    jwc.find({
        selector: {
            type : type
        }
    }).then(function(res){
        callback(res.docs);
    }).catch(function(err){console.log(err)});
}

function getComponent(id, callback){
    jwc.get(id).then(function(doc){
        callback(doc);
    }).catch(function(err){console.log(err)});
}

function insertComponent(doc, callback){
    jwc.put(doc).then(function(result){
        callback(result);
    })
}

function updateComponent(doc, callback){    
    jwc.get(doc._id).then(function(olddoc){        
        doc._rev = olddoc._rev;
        jwc.put(doc).then(function(newdoc){
            callback(newdoc);
        })
    })
}

function deleteComponent(doc, callback){    
    jwc.get(doc._id).then(function(olddoc){
        jwc.remove(olddoc);
        callback(olddoc);
    })
}