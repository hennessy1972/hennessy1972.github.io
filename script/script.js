function message(){
	document.getElementById("form" ).style.visibility = "hidden"; 
	var userName = document.getElementById("name").value;
	var userEmail = document.getElementById("email").value;
	document.getElementById("div1" ).style.visibility = "visible";
	document.getElementById("text").innerHTML = userName+", thank you for your message. We will be in touch via "+userEmail+" shortly with a response.";
	return false;
	 
}