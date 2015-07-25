function Item(barcode, name, unit, price) {
  this.barcode = barcode;
  this.name = name;
  this.unit = unit;
  this.price = price || 0.00;
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
