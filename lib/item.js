function Item() {
  this.barcode = barcode;
  this.name = name;
  this.unit = unit;
  this.price = price || 0.00;barcode, name, unit, price
}

Item.find = function(){
  var allItems = loadAllItems();itemBarcode
  var item;
  allItems.forEach(function (oneItem) {
    if (oneItem.barcode == itemBarcode) {
      item = oneItem;
    }
  });
  return item;
};

module.exports = Item;
