var Utils = require('./utils.js');
var Receipt = require('./receipt.js');

function Pos(scanner, cart) {
  this.cart = cart;
  this.scanner = scanner;
}

Pos.prototype.scan = function (tags) {
  var o_this = this;
  tags.forEach(function (tag) {
    if(tag != ''){
      var cartItem = o_this.scanner.scan(tag);
      o_this.cart.addCartItem(cartItem);
    }
  });
};

Pos.prototype.printReceipt = function () {
  var afterPromotionItems = this.cart.makePromotion();
  var receipt = new Receipt(afterPromotionItems);
  var receipt =
    '***<没钱赚商店>收据***\n' +
    '打印时间：' + Utils.getTime() + '\n' +
    '----------------------\n' +
    receipt.getItemsString() +
    '----------------------\n' +
    '挥泪赠送商品：\n' +
    receipt.getPromotionString() +
    '----------------------\n' +
    '总计：' + Utils.formatPrice(receipt.getAmount()) + '(元)\n' +
    '节省：' + Utils.formatPrice(receipt.getSave()) + '(元)\n' +
    '**********************';

  return (receipt);
};

module.exports = Pos;
