var AfterPromotionItem = require('./after-promotion-item.js');
var Fixtures = require('./utils.js');

function BuyTwoGetOneFree() {

}

BuyTwoGetOneFree.prototype.calculate = function (cartItems) {
  var afterPromotionItems = [];
  var promotionBarcodes = this.getPromotionBarcodes();

  cartItems.forEach(function (cartItem) {
    var freeCount = 0;
    var total = (cartItem.item.price) * (cartItem.count);

    if (cartItem.isPromotion(promotionBarcodes)) {
      freeCount = Math.floor(cartItem.count / 3);
      total = total - (cartItem.item.price) * freeCount;
    }

    var promotionItem = new AfterPromotionItem(cartItem, freeCount, total);
    afterPromotionItems.push(promotionItem);
  });
  return afterPromotionItems;
};

BuyTwoGetOneFree.prototype.getPromotionBarcodes = function () {
  var allPromotions = Fixtures.loadPromotions();
  var allPromotionBarcodes;

  allPromotions.forEach(function (onePromotion) {
    if (onePromotion.type === 'BUY_TWO_GET_ONE_FREE') {
      allPromotionBarcodes = onePromotion.barcodes;
    }
  });
  return allPromotionBarcodes;
};

module.exports = BuyTwoGetOneFree;
