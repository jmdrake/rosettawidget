function btnLogin() {
	login(inputs2json($("#frmLogin")), function (results) {      
		if (results.indexOf("Okay") == 0) {
      window.location = "index.html";
      getCurrentUserInfo(function(userinfo){
        if(userinfo){
          $("#fullname").html(decodeURI(userinfo["fullname"]));
          $("#fullname").removeClass("w3-hide");
          $("#usermenu").html(userinfo["menu"]);        
        }
    })      
		} else {
			alert(results);
      console.log(results);
		}
	})
}
