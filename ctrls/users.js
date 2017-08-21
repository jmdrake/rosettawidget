function register(userinfo, callback){
  $.post("../ctrls/php/register.php", userinfo, function (results) {        
    callback (results);
  })
}

function login(logininfo, callback) {
  $.post("../ctrls/php/login.php", logininfo, function(results) {
    callback (results);
  })
}

function logout(callback) {
  $.get ("../ctrls/php/logout.php", function(results) {
    callback (results);
  })
}

function currentuserinfo(callback) {
  $.get ("../ctrls/php/currentuserinfo.php", function(results) {
    callback (results);
  })  
}