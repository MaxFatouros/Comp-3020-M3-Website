if(document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
}else{
  ready()
}
// this function checks the ready state of the project
function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      console.log("in ready remove")
      button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }

  var addToCartButtons = document.getElementsByClassName('shop-item-button')
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }
  document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked)
}

function purchaseClicked() {
  alert('Thank you for your purchase')
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}


  // This function makes sure the user does not type the wrong input 
  // When updating the cart, check for the input value
  function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
  }
  function quantityChanged(event) {
      var input = event.target
      if (isNaN(input.value) || input.value <= 0) {
          input.value = 1
      }
      updateCartTotal()
  }
  //This function checks whether the button 'ADD To Cart' has been clicked
  function addToCartClicked(event){
      var button = event.target
      var shopItem = button.parentElement.parentElement
      var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
      var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
      var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
      addItemToCart(title,price,imageSrc)  // call the helper function
      updateCartTotal() // check if the total is updating
  }
  // Add the item to cart - helper functions
  // This function also checks for valid input as well
  function addItemToCart(title,price,imageSrc){
      var cartRow = document.createElement('div')
      cartRow.classList.add('cart-row')
      var cartItems = document.getElementsByClassName('cart-items')[0]
      var cartItemsNames = document.getElementsByClassName('cart-item-title')
      for(var i = 0; i< cartItemsNames.length; i++){
          if(cartItemsNames[i].innerText == title){ // check if the name is the same as the title
              alert('This item is already added to the cart')                
              return // exit out of the loop
          }
      }
    var cartRowContents =  ` 
      <div class="cart-item cart-column">
      <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">REMOVE</button>
      </div>` // take the entire div tag for the item
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    // Check if the following buttons are pressed
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem) 
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
  }


  // Go through every single row and update the price
  function updateCartTotal(){
      var cartItemContainer = document.getElementsByClassName('cart-items')[0]
      var cartRows = cartItemContainer.getElementsByClassName('cart-row');
      var total = 0;
      for(var i=0; i<cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
      }
      document.getElementsByClassName('cart-total-price')[0].innerText = total
  }