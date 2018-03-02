var PouchDB = require("pouchdb");

PouchDB.plugin(require('pouchdb-find'));

var users = new PouchDB("https://lembenslymencedderyoutst:3525b04add4d7190303d9b7c74ccb4a664a8cd34@visionpartners.cloudant.com/jamusers");

exports.registerUser = function(userinfo, callback){
    userinfo["_id"] = userinfo["username"];
    users.put(userinfo).then(function(response){callback(response)}).catch(function(err){callback(err)})
}

exports.loginUser = function(logininfo, callback){
    var password = logininfo.password;
    users.get(logininfo.userinfo).then(function(doc){
        if(doc.password==logininfo.password) {
            callback(doc)
        } else {
            callback("Error : Incorrect username or password");
        }
    }).catch(function(err){
        if(err.error=='not_found'){
            users.find({
                selector: {
                    email : logininfo.userinfo
                }
            }).then(function(res){
                if(res.docs.length>0) {
                    callback(res.docs[0]);
                } else {
                    callback("Error : Incorrect username or password");
                }
            }).catch(function(err){console.log(JSON.stringify(err))});
        }
    });
}


exports.getCurrentUserInfo = function(user, callback){
    users.get(user).then(function(doc){
        delete doc["password"];
        if(doc["role"]=="admin") {
            doc["menu"] = "<a href='#' onclick='btnLogout()'>Logout</a><a href='profile.html'>Edit Profile</a><a href='inventory.html'>Edit Inventory</a>";
        } else {
            doc["menu"] = "<a href='#' onclick='btnLogout()'>Logout</a><a href='profile.html'>Edit Profile</a>";
        }
        callback(doc);
    }).catch(function(err){console.log(err)});
}

