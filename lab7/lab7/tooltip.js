/* write functions that define the action for each event */
function showTip() {
	var sidTip = document.getElementById("sidTip"); 	 
	sidTip.style.display = "inline";  										
}

function hideTip() {  														
	var sidTip = document.getElementById("sidTip");
	sidTip.style.display = "none";
}

function init() {														
	var sidTip = document.getElementById("sidTip");
	sid.onmouseover = function() {showTip()}; 	
	var sidTip = document.getElementById("sidTip");
	sidTip.onmouseout = function() {hideTip()};
}
window.onload = init;