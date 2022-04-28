var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var gender = document.getElementById("gender");
var phone = document.getElementById("phone");
var address = document.getElementById("add");
var inquiry = document.getElementById("inquiry");

//adding event listeners to the all the input fields present in inquiry field.
fname.addEventListener("change", verifyFirstName);
lname.addEventListener("change", verifyLastName);
email.addEventListener("change", verifyEmail);
pass.addEventListener("change", verifyPassword);
phone.addEventListener("change", verifyPhone);
address.addEventListener("change", verifyAddress);
inquiry.addEventListener("change", verifyInquiry);

// defining the function to verify the firstname field in inquiry interface
function verifyFirstName() {
	if (fname.value == "") {
		// displaying error messsage if firstname field is empty
		document.getElementById("FnameErr").innerHTML = "* Type Your First Name";
		// displaying error span to to display the placed error.
		document.getElementById("FnameErr").style.display = "block";
	} else {
		// hiding the error field if no error found
		document.getElementById("FnameErr").style.display = "none";
		// returning true value if no error found
		return true;
	}
	// returning false value if error found
	return false;
}

// defining the function to verify lastname field in inquiry page
function verifyLastName() {
	if (lname.value == "") {
		// displaying error message in case of empty last name field
		document.getElementById("LnameErr").innerHTML = "* Type Your Last Name";
		document.getElementById("LnameErr").style.display = "block";
	} else {
		// hiding the error span if no error found
		document.getElementById("LnameErr").style.display = "none";
		// retrning true value if no error found
		return true;
	}
	// returning the false value if no error found.
	return false;
}

// function defined to verify the email provided by user
function verifyEmail() {
	// verifying if email field is empty
	if (email.value == "") {
		document.getElementById("emailErr").innerHTML = "* Type Your Email";
		document.getElementById("emailErr").style.display = "block";
	} else {
		// verifying correctness of email by specifying a specific pattern for it
		var emailPattern = /^[A-Za-z0-9\.%+-]+@[A-Z0-9a-z]+\.[A-Za-z]{2,6}$/;
		if (email.value.match(emailPattern)) {
			// hiding error span if input email matches the pattern specified
			document.getElementById("emailErr").style.display = "none";
			// returning true value in case of no error found
			return true;
		} else {
			// displaying error message and span if email doesnot matches pattern
			document.getElementById("emailErr").innerHTML = "* Type Valid Email";
			document.getElementById("emailErr").style.display = "block";
		}
	}
	// returning false value in case of error found.
	return false;
}

// function defined to verify the password field.
function verifyPassword() {
	// chcking if password field is empty.
	if (pass.value == "") {
		// displaing error span and message in case of error
		document.getElementById("passErr").innerHTML = "* Type Your Password";
		document.getElementById("passErr").style.display = "block";

	} else {
		// hiding error span in case of no error
		document.getElementById("passErr").style.display = "none";
		// returning true value in case of error
		return true;
	}
	// returning false value in case of error
	return false;
}

// function defined to verify phone number of customer.
function verifyPhone() {
	// checking if phone number field is empty
	if (phone.value == "") {
		// displaying error span and error message in case of error
		document.getElementById("phoneErr").innerHTML = "* Type Your Phone Number";
		document.getElementById("phoneErr").style.display = "block";
	}
	else {
		// verifying phone number by specifying a pattern for phone number
		var phonePattern = /^((\+977)[0-9]{10})$/;
		if (phone.value.match(phonePattern)) {
			// hiding the error span if no error found.
			document.getElementById("phoneErr").style.display = "none";
			// returning the true value if no error found
			return true;
		} else {
			// displaying error message and block in case of error
			document.getElementById("phoneErr").innerHTML = "* Type Valid Phone Number";
			document.getElementById("phoneErr").style.display = "block";
		}
	}
	// returning false value in case of error
	return false;
}

// function to verify the address of customer
function verifyAddress() {
	// checking if address is empty or not
	if (address.value == "") {
		// displaying error span and message if address firld is empty.
		document.getElementById("addErr").innerHTML = "* Type Your Address";
		document.getElementById("addErr").style.display = "block";
	} else {
		// hiding error sapn if no error found
		document.getElementById("addErr").style.display = "none";
		return true;
	}
	// returning false value if no error found
	return false;
}

// function to verify the inquiry or feedback field.
function verifyInquiry() {
	if (inquiry.value == "") {
		// displaying error span am=nd message in case of empty inquiry field
		document.getElementById("inqErr").innerHTML = "* Type Your Inquiry";
		document.getElementById("inqErr").style.display = "block";
	} else {
		// hiding error span if no error found
		document.getElementById("inqErr").style.display = "none";
		// returning true value if no error found
		return true;
	}
	// returning false value if error fpund
	return false;
}

// function defined to verify all the fields present in inquiry.
function verifyAllFields() {
	// console.log("test");
	// console.log(verifyFirstName());
	// console.log(verifyLastName());
	// console.log(verifyPassword())
	// console.log(verifyEmail());
	// console.log(verifyPhone());
	// console.log(verifyAddress());
	// console.log(verifyInquiry());

	// checking if all the verification is valid as valid returns true value
	if (verifyFirstName() == true && verifyLastName() == true && verifyPassword() == true && verifyEmail() == true && verifyPhone() == true && verifyAddress() == true && verifyInquiry() == true) {
		console.log("test complete");
		// displaying the thanks message in case of sucessful feedback or inquiry
		alert("Thanks for Your valuable Inquiry or Feedback!!");
	} else {
		console.log("Test failed");
		// alerting failed message in case of inquiry or feedback submission is failed
		alert("Inquiry or Feedback Submission failed !!");
		verifyFirstName();
		verifyLastName();
		verifyPassword();
		verifyEmail();
		verifyPhone();
		verifyAddress();
		verifyInquiry();
	}
}

