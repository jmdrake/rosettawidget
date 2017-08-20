// var PouchDB = require('pouchdb');

// var ajam = new PouchDB("https://visionpartners:CdMd0215@visionpartners.cloudant.com/ajam"); 
// var rnr = new PouchDB("https://visionpartners:CdMd0215@visionpartners.cloudant.com/rockandroll"); 
// var yorkville = new PouchDB("https://visionpartners:CdMd0215@visionpartners.cloudant.com/yorkville"); 

var ajam = new PouchDB("https://visionpartners.cloudant.com/ajam"); 
var rnr = new PouchDB("https://visionpartners.cloudant.com/rockandroll"); 
var yorkville = new PouchDB("https://visionpartners.cloudant.com/yorkville"); 

/* function getAJAMCategoryItems(category, callback){
    ajam.createIndex({
      index: {
        fields: ['Category']
      }
    }).then(function () {
        return ajam.find({
            selector: {
                Category : category
            }
        });
    }).then(function(res){
        callback(res.docs);
    }).catch(function(err){console.log(err)});
}*/

function getAJAMCategoryItems(category, callback){
    ajam.find({
        selector: {
            Category : category
        }
    }).then(function(res){
        callback(res.docs);
    }).catch(function(err){console.log(err)});
}

/* function getRANDRCategoryItems(category, callback){
    var items = [];
    rnr.createIndex({
      index: {
        fields: ['Category']
      }
    }).then(function () {
        return rnr.find({
            selector: {
                Category : category
            }
        });
    }).then(function(res){
        callback(res.docs);
    });
} */

function getRANDRCategoryItems(category, callback){
    rnr.find({
        selector: {
            Category : category
        }
    }).then(function(res){
        callback(res.docs);
    }).catch(function(err){console.log(err)});
}


function getItem(itemname, callback){
    ajam.get(itemname).then(function(doc){
        callback(doc);
    }).catch(function(err){
        rnr.get(itemname).then(function(doc){
            callback(doc);
        }).catch(function(err){
            console.log(err);
        })
    })
}
