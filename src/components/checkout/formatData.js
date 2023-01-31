export function formatData(cartItems, formData, subtotal, dfees, delivering) {
  let string = "Order details \n";

  //adding cart items to the string
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    string += item.name + "\n";
    string += "price: R" + item.price + "   Quantity: " + item.qty + "\n";
  }

  string += "\n";
  string += "Email: " + formData.email + "\n";
  string += "Phone number: " + formData.number + "\n";
  string += "Address1: " + formData.address1 + "\n";
  string += "Address2: " + formData.address2 + "\n\n";

  string += delivering ? "Needs delivering to client \n" : "The client will come collect \n";
  string += delivering ? `Total: R${subtotal + dfees} \n` : `Total: R${subtotal} \n`;

  return string;
}