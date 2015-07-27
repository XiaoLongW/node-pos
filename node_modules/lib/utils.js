var Promotion = require('./promotion.js');
var Item = require('./item.js');

function Utils() {
}

Utils.getAmount = function (afterPromotionItems) {
  var amount = 0;
  afterPromotionItems.forEach(function (afterPromotionItem) {
    amount += afterPromotionItem.total;
  });
  return amount;
};

Utils.getSave = function (afterPromotionItems) {
  var saveMoney = 0;
  afterPromotionItems.forEach(function (afterPromotionItem) {
    if (afterPromotionItem.freeCount) {
      saveMoney += afterPromotionItem.freeCount * afterPromotionItem.cartItem.item.price;
    }
  });
  return saveMoney;
};

Utils.formatPrice = function (price) {
  return price.toFixed(2);
};

Utils.getTime = function () {
  var date = new Date();
  return (date.getFullYear() + '年' + toDouble(date.getMonth() + 1) + '月' + toDouble(date.getDate()) + '日 ' + toDouble(date.getHours()) + ':' + toDouble(date.getMinutes()) + ':' + toDouble(date.getSeconds()))

  function toDouble(num) {
    return num < 10 ? ('0' + num) : ('' + num);
  }
};

Utils.getItemsString = function (afterPromotionItems) {
  var itemsString = '';
  afterPromotionItems.forEach(function (afterPromotionItem) {
    itemsString +=
      '名称：' + afterPromotionItem.cartItem.item.name +
      '，数量：' + afterPromotionItem.cartItem.count + afterPromotionItem.cartItem.item.unit +
      '，单价：' + Utils.formatPrice(afterPromotionItem.cartItem.item.price) +
      '(元)，小计：' + Utils.formatPrice(afterPromotionItem.total) + '(元)\n';
  });
  return itemsString;
};

Utils.getPromotionString = function (afterPromotionItems) {
  var proString = '';
  afterPromotionItems.forEach(function (afterPromotionItem) {
    if (afterPromotionItem.freeCount) {
      proString += '名称：' + afterPromotionItem.cartItem.item.name + '，数量：' + afterPromotionItem.freeCount + afterPromotionItem.cartItem.item.unit + '\n';
    }
  });
  return proString;
};

Utils.loadAllItems = function(){
  return [
    new Item('ITEM000000', '可口可乐', '瓶', 3.00),
    new Item('ITEM000001', '雪碧', '瓶', 3.00),
    new Item('ITEM000002', '苹果', '斤', 5.50),
    new Item('ITEM000003', '荔枝', '斤', 15.00),
    new Item('ITEM000004', '电池', '个', 2.00),
    new Item('ITEM000005', '方便面', '袋', 4.50)
  ];
}

Utils.loadPromotions = function(){
  return [
    new Promotion('BUY_TWO_GET_ONE_FREE', [
      'ITEM000000',
      'ITEM000001',
      'ITEM000005'
    ])
  ];
}
module.exports = Utils;
