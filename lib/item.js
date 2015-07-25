//var Fixtures = require('./fixtures.js');
var Utils = require('./utils.js');

function Item(barcode, name, unit, price) {
  this.barcode = barcode;
  this.name = name;
  this.unit = unit;
  this.price = price || 0.00;
}

Item.find = function(itemBarcode){
  var Utils = require('./utils.js');
  var allItems = Utils.loadAllItems();
  var item;
  allItems.forEach(function (oneItem) {
    if (oneItem.barcode == itemBarcode) {
      item = oneItem;
    }
  });
  return item;
};

module.exports = Item;
