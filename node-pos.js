// #! /usr/bin/env node
// var node-pos = require('./lib/index.js')
//   var promotionCalculator = new PromotionCalculator();
//   var cart = new Cart(promotionCalculator);
//
//   var scanner = new Scanner();
//
//   var pos = new Pos(scanner, cart);
//
//   pos.scan(tags);
//   console.log((pos.printReceipt());
var Item = require('./lib/item.js');
var CartItem = require('./lib/cart-item');
var item = new Item();
item.find();
Item.find();
