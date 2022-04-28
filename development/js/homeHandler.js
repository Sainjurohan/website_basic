// checking if document is in loading or loaded phase
if (document.readyState == 'loading') {
	// if document is in loading phase specifying action listener to be called only after documet is loaded
	document.addEventListener('DOMContentLoaded',  ready);
}else{
	// if document is already loaded calling ready() function directly
	ready();
}

// defining the ready function to bind the add to cart buttons to event listeners
function ready(){
	var addToCartButtons = document.getElementsByClassName('cart-btn');
	for(var i = 0; i < addToCartButtons.length; i++){
		var button = addToCartButtons[i];
		button.addEventListener('click', addToCartClicked);
	}
	// adding event listeners to purchase button in cart div
	document.getElementsByClassName('purchase-btn')[0].addEventListener('click', purchaseBtnClicked);
}

// add to cart function to add the items to the cart for purchase purpose
// called when add to cart button is clicked
function addToCartClicked(event){
	var button = event.currentTarget;
	var shopItem = button.parentElement;
	var title = shopItem.getElementsByClassName('product-name')[0].innerHTML;
    var price = shopItem.getElementsByClassName('product-price')[0].innerHTML;
    var imageSrc = shopItem.getElementsByClassName('product-image')[0].src;
	console.log(title);		// testing the validity of function using console
	console.log(price);
	console.log(imageSrc);
	// calling add to cart function which actually adds the item to cart
	// it takes title, price and imagesource of product as an argument
	addToCart(title, price, imageSrc);
	// calling updateTotal() function which actually updates  the total purchase amount of cart
	updateTotal();
}

// defining addToCart() function which adds the item to the cart
function addToCart(title, price, imageSrc){
	// this function takes title, price and image Source of product as an argument
	console.log("addToCart");

	// creating new div element in html using js to place the product
	var cartRow = document.createElement('div');
	// giving new div added the name ie cart-row
	cartRow.classList.add('cart-row');
	var cartItems = document.getElementsByClassName('cart-items')[0];
	var cartItemNames = cartItems.getElementsByClassName('cart-title');
	// operation performed to traverse the cart items to not allow duplication in cart items
	for(var i = 0; i < cartItemNames.length; i++){
		if(cartItemNames[i].innerText == title){
			alert('This product is already in cart');
			// providing product added alert if new title is equal to title in cart
			return;
		}
	}
	// logging the message to console to verify if error occur in program
	console.log("add to cart test 2");
	// defining new cart row if cart title is new
	var newCartRow =`
		<div class="cart-column">
			<img class="cart-image" src="${imageSrc}" width="100" height="100">
			<span class="cart-title">${title}</span>
		</div>
		<div class="cart-column"><span class="cart-price">${price}</span></div>
		<div class="cart-column">
			<input class="cart-quantity" type="number" value="1">
			<button class="remove-btn" type="button">Remove</button>
		</div>`

	console.log("add to cart test3");
	// writing the html contents in newly defined div with class name cart-row
	cartRow.innerHTML = newCartRow;
	// appending new cart Row in cart-items class defined for cart div
	cartItems.append(cartRow);
	// adding action listener tt newly defined remove button present in cart row
	cartRow.getElementsByClassName("remove-btn")[0].addEventListener('click', removeItem);
	// adding action listener to newly defined number input field present in cart row
	cartRow.getElementsByClassName("cart-quantity")[0].addEventListener('change', updateQuantity);
	
}

// function defined to remove the cart items
function removeItem(event){
	var clicked = event.currentTarget;
	// removing the whole parent division when remove button is clicked
	clicked.parentElement.parentElement.remove();
	// calling updateTotal function to update the total price  of cart items after removal of any cart items
	updateTotal();
}

// function defined to perform the necessary actions if quantity of cart item is updated
function updateQuantity(event){
	var quantityUpdate = event.currentTarget;
	// making sure the quantity of cart item is 1 as quantity cannot be negitive
	if(quantityUpdate.value <= 0){
		quantityUpdate.value = 1;
	}
	// calling updateTotal function if quantity of cart item is changed
	updateTotal();
}

// defining the updateTotal function to update the total cost of items present in cart if quantity is updated or item is removed
function updateTotal(){
	var cartContainer = document.getElementsByClassName('cart-items')[0];
	var cartRows = cartContainer.getElementsByClassName('cart-row');
	var totalPrice = 0;

	console.log("update total test");

	// traversing the cart-row to calculate total price of items present in cart
	for(var i = 0; i < cartRows.length; i++){
		var row = cartRows[i];
		var cartPrice = row.getElementsByClassName('cart-price')[0];
		var cartQuantity = row.getElementsByClassName('cart-quantity')[0];

		console.log("update total test 2");
		// extracting the values of price of cart item
		var price = parseInt(cartPrice.innerHTML);
		//extracting the value of quantity of cart item
		var quantity = cartQuantity.value;
		// calculating the totalPrice of items present in cart
		totalPrice = totalPrice + (price * quantity);
	}
	document.getElementsByClassName('total-price')[0].innerText = totalPrice + " NPR";
	console.log("update total test 3")
}

// function defined to specify actions to be performed when purchase button is clicked
function purchaseBtnClicked(event){
	alert('Thanks for the purchase. Please proceed to payment.');
	// navigating customer to payment interface if purchase button in cart is clicked
	window.location.href = "./html/payment.html";
	console.log('purchase check');
}
// getting the nodes of next and previous buttons from class name
var nextBtns = document.getElementsByClassName("next-btn");
var prevBtns = document.getElementsByClassName("prev-btn");

// adding the event listeners to all the next buttons
for( var i = 0; i < nextBtns.length; i++){
	nextBtns[i].addEventListener("click", displayNextTable);
}

// adding event isteners to all the previous buttons in home page
for( var i = 0; i < prevBtns.length; i++){
	prevBtns[i].addEventListener("click", displayPreviousTable);
}

// defining the function to display the next product taable, called whenever next button is clicked
function displayNextTable(event){
	// getting the current target i.e. it identifies which button is clicked.
	var nextBtn = event.currentTarget;
	// getting the parent element of button clicked.
	var parentDiv = nextBtn.parentElement;
	var tableArray = parentDiv.getElementsByClassName("product-tags");

	for(var i = 0; i < tableArray.length; i++){
		tableArray[i].style.display = "none";
		tableArray[i+=1].style.display = "block";
	}
}

// defining the function to display the previous product table, called whenever previous button is clicked
function displayPreviousTable(event){
	// getting target element
	var prevBtn = event.currentTarget;
	// getting the parent element of button clicked
	var parentDiv = prevBtn.parentElement;
	var tableArray = parentDiv.getElementsByClassName("product-tags");

	for(var i = tableArray.length - 1; i >= 0; i--){
		tableArray[i].style.display = "none";
		tableArray[i-=1].style.display = "block";
	}
}