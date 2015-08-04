var Promotion = require('./promotion.js');
var Item = require('./item.js');

function Utils() {
}


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
