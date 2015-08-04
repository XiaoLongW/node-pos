var Utils = require('./utils.js');

function Receipt(afterPromotionItems){
   this.afterPromotionItems=afterPromotionItems;
}


Receipt.prototype.getItemsString = function () {
  var itemsString = '';
  this.afterPromotionItems.forEach(function (afterPromotionItem) {
    itemsString +=
      '名称：' + afterPromotionItem.cartItem.item.name +
      '，数量：' + afterPromotionItem.cartItem.count + afterPromotionItem.cartItem.item.unit +
      '，单价：' + Utils.formatPrice(afterPromotionItem.cartItem.item.price) +
      '(元)，小计：' + Utils.formatPrice(afterPromotionItem.total) + '(元)\n';
  });
  return itemsString;
};

Receipt.prototype.getPromotionString = function () {
  var proString = '';
  this.afterPromotionItems.forEach(function (afterPromotionItem) {
    if (afterPromotionItem.freeCount) {
      proString += '名称：' + afterPromotionItem.cartItem.item.name + '，数量：' + afterPromotionItem.freeCount + afterPromotionItem.cartItem.item.unit + '\n';
    }
  });
  return proString;
};


Receipt.prototype.getAmount = function () {
  var amount = 0;
  this.afterPromotionItems.forEach(function (afterPromotionItem) {
    amount += afterPromotionItem.total;
  });
  return amount;
};

Receipt.prototype.getSave = function () {
  var saveMoney = 0;
  this.afterPromotionItems.forEach(function (afterPromotionItem) {
    if (afterPromotionItem.freeCount) {
      saveMoney += afterPromotionItem.freeCount * afterPromotionItem.cartItem.item.price;
    }
  });
  return saveMoney;
};

module.exports = Receipt;
