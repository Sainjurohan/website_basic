var email = document.getElementById("email");
var pass = document.getElementById("pass");
var amount = document.getElementById("payAmt");
var cardNum = document.getElementById("cNum");
var validity = document.getElementById("validity");
var cardCode = document.getElementById("cCode");
var zip = document.getElementById("zipCode");

// adding action listener to all the input fields present in the payment interface
email.addEventListener("change", verifyEmail);
zip.addEventListener("change", verifyZip);
pass.addEventListener("change", verifyPassword);
cardNum.addEventListener("change", verifyCardNumber);
amount.addEventListener("change", verifyAmount);
validity.addEventListener("change", verifyValidity);
cardCode.addEventListener("change", verifyCardCode);

// adding action listener to purchase button of payment interface using dom2 method
document.getElementsByClassName("orderBtn")[0].addEventListener("click", verifyAllFields);



// function to verify the zip code during payment of items
function verifyZip() {
	var zipValue = zip.value;
	if (zipValue == "") {
		console.log(zipValue)
		document.getElementById("zipErr").innerHTML = "* Type Your ZIP Code";
		document.getElementById("zipErr").style.display = "block";
	} else {
		// checking if zipValue is number or not as zip must be number
		if (isNaN(parseInt(zipValue))) {
			document.getElementById("zipErr").innerHTML = "* ZIP Code Must Be Number";
			document.getElementById("zipErr").style.display = "block";
		} else {
			// displaying message in ziperr span in case zip is less than 4
			// checking if zip is number
			if (zipValue.length < 4) {
				document.getElementById("zipErr").innerHTML = "* ZIP Code Must be 4 in Length";
				document.getElementById("zipErr").style.display = "block";
			} else {
				document.getElementById("zipErr").style.display = "none";
				// returing true in case of no any error in zip
				return true;
			}
		}
	}
	// returning false value in case of error
	return false;
}

// function to verify the card number provided by customer during payment
function verifyCardNumber() {
	var cardNumber = cardNum.value;
	if (cardNumber == "") {
		document.getElementById("cardErr").innerHTML = "* Type Your Visa Card Number";
		document.getElementById("cardErr").style.display = "block";
	} else {
		// verifying the card number to be integer (number)
		if (isNaN(parseInt(cardNumber))) {
			document.getElementById("cardErr").innerHTML = "* Visa Card Number Must be Integer";
			document.getElementById("cardErr").style.display = "block";
		} else {
			// displaying error message in error span in case of card number < 16
			// as card number is generally of 16 length
			if (cardNumber < 16) {
				document.getElementById("cardErr").innerHTML = "* Valid Card Number 16 in length";
				document.getElementById("cardErr").style.display = "block";
			} else {
				document.getElementById("cardErr").style.display = "none";
				return true;
			}
		}
	}
	return false;
}

// verifying the card code provived by customer during payment
function verifyCardCode() {
	var code = cardCode.value;
	if (code == "") {
		document.getElementById("codeErr").innerHTML = "* Type Your Card Code";
		document.getElementById("codeErr").style.display = "block";
	} else {
		// verifying weather card code is integer or not
		if (isNaN(parseInt(code))) {
			document.getElementById("codeErr").innerHTML = "* Card Code Must be Integer";
			document.getElementById("codeErr").style.display = "block";
		} else {
			// checking length of code as code are generally 3 in length
			if (code < 3) {
				document.getElementById("codeErr").innerHTML = "* Card code 3 in Length";
				document.getElementById("codeErr").style.display = "block";
			} else {
				// setting display property of code error to none in case of no error
				document.getElementById("codeErr").style.display = "none";
				// returning true value if no error
				return true;
			}
		}
	}
	// returning flase boolean value in case of error.
	return false;
}

function verifyEmail() {
	if (email.value == "") {
		document.getElementById("emailErr").innerHTML = "* Type Your Email";
		document.getElementById("emailErr").style.display = "block";
	} else {
		// verifying correctness of email by specifying a specific pattern for it
		var emailPattern = /^[A-Za-z0-9\.%+-]+@[A-Z0-9a-z]+\.[A-Za-z]{2,6}$/;

		// displaying valid Email in error span in case of valid email
		if (email.value.match(emailPattern)) {
			document.getElementById("emailErr").innerHTML = "* Valid Email";
			document.getElementById("emailErr").style.display = "none";
			return true;
		} else {
			// displaying type valid email message if email is invalid
			document.getElementById("emailErr").innerHTML = "* Type Valid Email";
			document.getElementById("emailErr").style.display = "block";
		}
	}
	return false;
}

function verifyPassword() {
	if (pass.value == "") {
		document.getElementById("passErr").innerHTML = "* Type Your Password";
		document.getElementById("passErr").style.display = "block";

	} else {
		document.getElementById("passErr").style.display = "none";
		return true;
	}
	return false;
}

function verifyAmount() {
	if (amount.value == "") {
		document.getElementById("amtErr").innerHTML = "* Enter Purchase Amount";
		document.getElementById("amtErr").style.display = "block";
	} else {
		if (isNaN(parseInt(amount.value))) {
			document.getElementById("amtErr").innerHTML = "* Purchase Amount Must be Integer";
			document.getElementById("amtErr").style.display = "block";
		} else {
			document.getElementById("amtErr").style.display = "none";
			return true;
		}
	}
	return false;
}

function verifyValidity() {
	if (validity.value == "") {
		document.getElementById("dateErr").innerHTML = "* Type Validity of Card";
		document.getElementById("dateErr").style.display = "block";
	} else {
		document.getElementById("dateErr").style.display = "none";
		return true;
	}
	return false;
}

// function to make payment for the purchased goods.
function verifyAllFields() {
	// console.log(verifyZip());
	// console.log(verifyAmount());
	// console.log(verifyEmail());
	// console.log(verifyPassword())
	// console.log(verifyCardNumber());
	// console.log(verifyValidity())
	// console.log(verifyCardCode());

	// verifying if all the fields are entered that are required for payment
	if (verifyEmail() == true && verifyPassword() == true && verifyAmount() == true && verifyCardNumber() == true && verifyValidity() == true && verifyCardCode() == true && verifyZip() == true) {
		// if verified displaying alert message of sucessful payment
		alert("Payment Sucessful!! Thanks for your purchase.");
	} else {
		// displaying message of unsucessful payment in case of certain error
		alert("Payment Unsucessful !!");
		verifyZip();
		verifyAmount();
		verifyEmail();
		verifyPassword();
		verifyCardNumber();
		verifyValidity();
		verifyCardCode();
	}
}
