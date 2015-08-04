'use strict';

var Item = require('../lib/item.js');
var BuyTwoGetOneFree = require('../lib/two-get-one.js');
var CartItem = require('../lib/cart-item.js');
var AfterPromotionItem = require('../lib/after-promotion-item.js');

describe("BuyTwoGetOneFree",function(){

  describe('#calculate()', function() {

      it('should return right afterPromotionItems ', function() {
        var cartItem = new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00),1);
        var cartItems = [cartItem]
        var afterPromotionItem = new AfterPromotionItem(cartItem,0,3.00);
        var afterPromotionItems = [afterPromotionItem];
        var buyTwoGetOneFree = new BuyTwoGetOneFree();
        expect(buyTwoGetOneFree.calculate(cartItems)).toEqual(afterPromotionItems);
      });

  });

});
