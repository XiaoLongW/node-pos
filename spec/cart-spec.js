'use strict';

var CartItem = require('../lib/cart-item.js');
var Item = require('../lib/item.js');
var Cart = require('../lib/cart.js');
var BuyTwoGetOneFree = require('../lib/two-get-one.js');
var AfterPromotionItem = require('../lib/after-promotion-item.js');

describe("Cart",function(){

  describe('#addCartItem()', function() {

      it('should add ', function() {
        var cart = new Cart(new BuyTwoGetOneFree());
        var item =new Item('ITEM000001', '雪碧', '瓶', 3.00);
        var cartItem = new CartItem(item,1);
        cart.addCartItem(cartItem);
        var cartItems=[cartItem];
        expect(cart.cartItems).toEqual(cartItems);
      });
  });

  describe('#makePromotion()', function() {

      it('should add ', function() {
        var cart = new Cart(new BuyTwoGetOneFree());
        var cartItem = new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00),1);

        cart.cartItems = [cartItem]
        var afterPromotionItem = new AfterPromotionItem(cartItem,0,3.00);
        var afterPromotionItems = [afterPromotionItem];
        expect(cart.makePromotion()).toEqual(afterPromotionItems);
      });
  });

});
