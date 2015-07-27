var Node = require('lib');
var options = process.argv;
var rf = require("fs");
var inputs = rf.readFileSync(options[2],'utf-8').split("\n");

function printReceipt(tags){
  var promotionType = new Node.BuyTwoGetOneFree();
  var cart = new Node.Cart(promotionType);

  var scanner = new Node.Scanner();

  var pos = new Node.Pos(scanner, cart);

  pos.scan(tags);
  var receipt = pos.printReceipt()

  console.log(receipt);
}

printReceipt(inputs);

exports.printReceipt = printReceipt;
