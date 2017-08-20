function btnLogin() {
	login(inputs2json($("#frmLogin")), function (results) {      
		if (results.indexOf("Error") < 0) {
		    window.location = "index.html";
		} else {
			alert(results);
		}
	})
}
