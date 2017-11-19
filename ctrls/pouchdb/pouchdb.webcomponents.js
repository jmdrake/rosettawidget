var jwc = new PouchDB("https://visionpartners.cloudant.com/jamjwc");

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
    jwc.put(doc).then(function(newdoc){
        callback(newdoc);
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