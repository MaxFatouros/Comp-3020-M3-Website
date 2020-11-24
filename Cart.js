
if(document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
}else{
  ready()
}

function ready(){
  //Button class
  var removeCartItemButtons = document.getElementsByClassName('menu-button')
  // Event listeners
  for(var i=0; i<removeVartItemButton.length; i++){
    var button = removeVartItemButton[i]
    button.addEventListener('click', function(event)){
      var buttonClicked = event.target
      buttonClicked.parentElement.parentElement.remove()
    }) // removes all the items from the cart

  }
}

function removeCartItem()


// Go through every single row and update the price
function updateCartTotal(){
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  for(var i=0; i<cartRows.length; i++){
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    var price = parsefloat(priceElement.innerText.replace('$',''))
    var quantity = quantityElement.value
    total = total + (price * quantity)
  }
  document.getElementsByClassName('cart-total-price')[0].innerText = total

}
