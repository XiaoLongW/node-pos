var Node = require('lib');

function printReceipt(tags){
  var promotionType = new Node.BuyTwoGetOneFree();
  var cart = new Node.Cart(promotionType);

  var scanner = new Node.Scanner();

  var pos = new Node.Pos(scanner, cart);

  pos.scan(tags);
  var receipt = pos.printReceipt();

  console.log(receipt);
}


exports.printReceipt = printReceipt;
