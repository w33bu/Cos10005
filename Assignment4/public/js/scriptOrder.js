// JavaScript Document
function validate() {
	/* inputs in register page */
	var  delivery= document.getElementById("delivery").value;
	var  postcode = document.getElementById("postcode").value;
	var  billing = document.getElementById("billing").value;
	var  contact = document.getElementById("contact").value;
	var  email = document.getElementById("email").value;
	var visa = document.getElementById("visa").value;
	var	masterCard = document.getElementById("masterCard").value;
	var americanExpress =  document.getElementById("americanExpress").value;
	
	/* stores the error message */
	var errMsg = "";								
	var result = true;		/* assumes no errors */
	var pattern1 = /^\d{4}$/; /*pattern to check if field has 4-digit only*/
	var pattern2 = /^\d{16}$/; /*same as above*/
	var pattern3 = /^\d{15}$/;
	/* Rule 1, check if all required inputs have value */
	if (delivery === "") {
		errMsg += "Delivery address cannot be empty. \n";
	}
	if (postcode=== "") {
		errMsg += "Postcode cannot be empty. \n";
	}
	
	if (billing=== "") {
		errMsg += "Billing address cannot be empty. \n";
	}
	
	if (contact=== "") {
		errMsg += "Contact number cannot be empty. \n";
	}
	
	if (email=== "") {
		errMsg += "Email cannot be empty. \n";
	}
	
	/*Rule 3: Check if fields contain only digit and exact number*/
	if (! postcode.match (pattern1)) {
		errMsg += "Postcode must contain 4-digit only.\n";
	}
	
	if (! visa.match (pattern2)) {
		errMsg += "Visa number must contain 16-digit.\n";
	}
	if (! masterCard.match (pattern2)) {
		errMsg += "Master Card number must contain 16-digit.\n";
	}
	if (! americanExpress.match (pattern3)) {
		errMsg += "American Express number must contain 15-digit.\n";
	}
	
	/*return errMsg if errors occur*/
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

/*enable delivery address input if delivery box is checked*/
function EnableDisableTextBox() {
        var sellDeli = document.getElementById("sellDeli");
        var delivery = document.getElementById("delivery");
        delivery.disabled = sellDeli.checked ? false : true;
        if (!delivery.disabled) {
            delivery.focus();
        }
    }
window.onload = EnableDisableTextBox();
