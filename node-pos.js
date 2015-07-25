//var Item = require('./lib/item.js');
//var CartItem = require('./lib/cart-item.js');
var Pos = require('./lib/pos.js');
var Cart = require('./lib/cart.js');
var Scanner = require('./lib/scanner.js');
//var Promotion = require('./lib/promotion.js');
var PromotionCalculator = require('./lib/promotion-calculator.js');

var tags = ['ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2',
      'ITEM000005',
      'ITEM000005',
      'ITEM000005'];

  var promotionCalculator = new PromotionCalculator();
  var cart = new Cart(promotionCalculator);

  var scanner = new Scanner();

  var pos = new Pos(scanner, cart);

  pos.scan(tags);
  pos.printReceipt();
