/* 
Chapter 4: Extracting Calculations from actions

Imperative way

Example:
 MegaMart want to offer free hipping if the order total is at least $20.
 Need to put n icon next to the buy button if adding that item to the cart will
 bump the cart over $20
*/

let shopping_cart = []; // global variable
let shopping_cart_total = 0; // global variable are mutable --> they are actions

function add_item_to_cart(name, price) {
  shopping_cart.push({ name, price });
  calculate_cart_total();
}

function calculate_cart_total() {
  shopping_cart_total = shopping_cart.reduce(
    (total, item) => total + item.price,
    0
  );
}

function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.1);
}

function set_tax_dom(total) {
  return "update DOM to set tax form";
}

function get_buy_buttons_dom() {
  return "Buy button";
}

function update_shipping_icons() {
  let buy_buttons = get_buy_buttons_dom();

  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item_price = button.getAttribute("data-price");
    if (shopping_cart_total + item_price >= 20) {
      button.innerHTML = "Show free shipping icon";
    } else {
      button.innerHTML = "Hide free shipping icon";
    }
  }
}
