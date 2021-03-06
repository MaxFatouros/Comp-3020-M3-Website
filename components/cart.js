let flag = false;
let items = {
  title: "",
  price: "",
  imageSrc: "",
};
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
// this function checks the ready state of the project
function ready() {
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    console.log("in ready remove");
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  var addToCartButtons = document.getElementsByClassName("shop-item-button");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClicked);

  for (item of document.querySelectorAll(".custom-btn")) {
    item.addEventListener("click", () => {
      document.querySelector(".custom").style.display = "none";
      document.querySelector(".summary-container").style.display = "none";
    });
  }

  document.querySelector(".add-cart").addEventListener("click", () => {
    document.querySelector(".custom").style.display = "none";
    addItemToCart(items.title, items.price, items.imageSrc);
    updateCartTotal();
  });
  document.querySelector("#confirm").addEventListener("click", () => {
    alert("Thank you for shopping!\nyou will recieve an email with order information shortly");
    location.replace("../index.html")
  });
}
// CHange this button where it directs you to order summary
function purchaseClicked() {
  var cartItems = document.getElementsByClassName("cart-items")[0];
  let orderItems = document.querySelectorAll(".cart-row");
  console.log(orderItems);
  let sum = document.querySelector(".summary");
  console.log(sum);
  document.querySelector(".summary-container").style.display = "block";

  for (item of orderItems) {
    console.log(item);
    sum.appendChild(item);
  }
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }

  updateCartTotal();
}

// This function makes sure the user does not type the wrong input
// When updating the cart, check for the input value
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

//This function checks whether the button 'ADD To Cart' has been clicked
function addToCartClicked(event) {
  document.querySelector(".custom").style.display = "block";
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  items = {
    title,
    price,
    imageSrc,
  };

  // check if the total is updating
}
// Add the item to cart - helper functions
// This function also checks for valid input as well
function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemsNames = document.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      // check if the name is the same as the title
      alert("This item is already added to the cart");
      return; // exit out of the loop
    }
  }
  var cartRowContents = `
      <div class="cart-item cart-column">
      <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`; // take the entire div tag for the item
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);

  // Check if the following buttons are pressed
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

// Go through every single row and update the price
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = total;
}

/*
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  */


  const fullname = document.getElementById("fname")
  const email = document.getElementById("email")
  const address = document.getElementById("adr")
  const city = document.getElementById("city")
  const province = document.getElementById("province")
  const zip = document.getElementById("zip")






  // document.querySelector("#confirm").addEventListener("click", (e) => {
  //   let messages = [];
  //
  //
  //   if (fullname.value === "" || fullname.value == null
  //    || email.value === "" || email.value == null
  //    || address.value === "" || address.value == null
  //    || city.value === "" || city.value == null
  //    || province.value === "" || province.value == null
  //    || zip.value === "" || zip.value == null) {
  //     messages.push("forms cannot be empty");
  //   }
  //
  //   if (messages.length > 0) {
  //     e.preventDefault();
  //     window.alert(messages[0]);
  //   }
  //   else {
  //     e.alert("Thank you for shopping!\nyou will recieve an email with order information shortly");
  //     location.replace("../index.html")
  //   }
  //
  // });
