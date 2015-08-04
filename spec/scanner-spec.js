'use strict';

var Scanner = require('../lib/scanner.js');
var CartItem = require('../lib/cart-item.js');
var Item = require('../lib/item.js');

describe("Scanner",function(){

  describe('#scan()', function() {

      it('should return right cartItem ', function() {
        var scanner = new Scanner();
        var cartItem = new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00),1);
        expect(scanner.scan('ITEM000001')).toEqual(cartItem);
      });

  });
});
