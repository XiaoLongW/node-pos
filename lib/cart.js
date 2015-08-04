function Cart(promotionType) {
  this.cartItems = [];
  this.promotionType = promotionType;
}

Cart.prototype.addCartItem = function (oneCartItem) {
  var cartItem = oneCartItem.find(this.cartItems);
  if (cartItem) {
    cartItem.addCount(oneCartItem.count);
  } else {
    this.cartItems.push(oneCartItem);
  }
};

Cart.prototype.makePromotion = function () {
  return this.promotionType.calculate(this.cartItems)
};

module.exports = Cart;
