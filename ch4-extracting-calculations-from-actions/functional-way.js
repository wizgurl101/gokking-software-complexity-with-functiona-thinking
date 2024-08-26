/* 
Chapter 4: Extracting Calculations from actions

Functional way

Example:
 MegaMart want to offer free hipping if the order total is at least $20.
 Need to put n icon next to the buy button if adding that item to the cart will
 bump the cart over $20
*/

function add_item_to_cart(name, price) {
  let shopping_cart = add_item(shopping_cart, name, price);
  calculate_cart_total(shopping_cart);
}

function add_item(cart, name, price) {
  // copying a mutable object (in this case the shopping_cart array)
  // before modifying --> this is a way to implement immutabilitys
  let new_cart = cart.slice();
  new_cart.push({ name, price });
  return new_cart;
}

function calculate_cart_total(cart) {
  let total = calc_total(cart);

  set_tax_dom(total);
  update_shipping_icons(total);
  update_tax_dom(total);
}

function calc_total(cart) {
  return cart.reduce((acc, item) => acc + item.price, 0);
}

function update_tax_dom(total) {
  let total_with_tax = total + calc_tax(total);
  set_tax_dom(total_with_tax);
}

function calc_tax(total) {
  return total * 0.1;
}

function set_tax_dom(total) {
  return "update DOM to set tax form";
}

function get_buy_buttons_dom() {
  return "Buy button";
}

function update_shipping_icons(total) {
  let buy_buttons = get_buy_buttons_dom();

  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item_price = button.getAttribute("data-price");
    if (is_shipping_free(total, item_price)) {
      button.innerHTML = "Show free shipping icon";
    } else {
      button.innerHTML = "Hide free shipping icon";
    }
  }

  function is_shipping_free(cart_total, item_price) {
    return cart_total + item_price >= 20;
  }
}
