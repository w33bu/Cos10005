// JavaScript Document
function validate() {
	/* inputs in register page */
	var username = document.getElementById("username").value;
	var password1 = document.getElementById("password").value;
	
	/* stores the error message */
	var errMsg = "";								
	var result = true;		/* assumes no errors */
	
	/* Rule 1, check if all required inputs have value */
	if (username === "") {
		errMsg += "Username cannot be empty. \n";
	}
	if (password1 === "") {
		errMsg += "Password cannot be empty. \n";
	}
	
	/*Rule 2: check number of characters */
	if(password1.length < 8) { 
		errMsg += "Password must at least 8-character long. \n";
	}
	
	if (errMsg !== "") {
		alert (errMsg);
		result = false;
	} 
	return result;
} 
function init () {
  var regForm = document.getElementById("regform");
  /*summitted only if all the fields be validate*/
	regForm.onsubmit = validate;
}

window.onload = init;